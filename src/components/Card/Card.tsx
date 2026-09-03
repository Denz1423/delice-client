import { useState } from 'react';
import { Product } from '@/models/Product';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addProductToCart,
  removeProductFromCart,
} from '@/services/state/CartSlice';
import { selectCartProducts } from '@/services/state/CartSelectors';
import CategoryMark from '@/components/Card/CategoryMark';
import {
  AddButton,
  Body,
  CardImage,
  CardRoot,
  ImageBox,
  MetaRow,
  Name,
  Price,
  Qty,
  Shimmer,
  Stepper,
  StepperButton,
} from '@/components/Card/Card.style';

interface Props {
  product: Product;
  index?: number;
}

export default function Card({ product, index = 0 }: Props) {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(
    (state) =>
      selectCartProducts(state)?.find((p) => p.id === product.id)?.quantity ??
      0,
  );
  const imageSource = import.meta.env.VITE_AWS_IMAGES;
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>(
    product.imageUrl ? 'loading' : 'error',
  );

  return (
    <CardRoot
      data-cy={`card-${product.name}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <ImageBox>
        {imgStatus === 'error' ? (
          <CategoryMark
            type={product.type}
            data-cy={`card-${product.name}-fallback`}
          />
        ) : (
          <>
            {imgStatus === 'loading' && <Shimmer aria-hidden="true" />}
            <CardImage
              src={imageSource + product.imageUrl}
              alt=""
              loading="lazy"
              decoding="async"
              data-cy={`card-${product.name}-img`}
              style={{ opacity: imgStatus === 'loaded' ? 1 : 0 }}
              onLoad={() => setImgStatus('loaded')}
              onError={() => setImgStatus('error')}
            />
          </>
        )}
      </ImageBox>

      <Body>
        <Name data-cy={`card-${product.name}-name`}>{product.name}</Name>
        <MetaRow>
          <Price data-cy={`card-${product.name}-price`}>
            ${product.price.toFixed(2)}
          </Price>

          {quantity === 0 ? (
            <AddButton
              type="button"
              onClick={() => dispatch(addProductToCart({ product }))}
              data-cy={`card-${product.name}-button`}
            >
              Add
            </AddButton>
          ) : (
            <Stepper data-cy={`card-${product.name}-stepper`}>
              <StepperButton
                type="button"
                aria-label={`Remove one ${product.name}`}
                onClick={() => dispatch(removeProductFromCart(product.id))}
                data-cy={`card-${product.name}-decrement`}
              >
                −
              </StepperButton>
              <Qty data-cy={`card-${product.name}-qty`}>{quantity}</Qty>
              <StepperButton
                type="button"
                aria-label={`Add one ${product.name}`}
                onClick={() => dispatch(addProductToCart({ product }))}
                data-cy={`card-${product.name}-increment`}
              >
                +
              </StepperButton>
            </Stepper>
          )}
        </MetaRow>
      </Body>
    </CardRoot>
  );
}
