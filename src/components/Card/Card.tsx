import { Product } from '@/models/Product';
import { useAppDispatch } from '@/store/hooks';
import { ProductCardButton } from '@/components/Button/Button.style';
import { addProductToCart } from '@/services/state/CartSlice';
import {
  CardContainer,
  CardFooter,
  CardImage,
  CardInformation,
  CardName,
  CardPrice,
} from '@/components/Card/Card.style';

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  const dispatch = useAppDispatch();
  const imageSource = import.meta.env.VITE_AWS_IMAGES;

  return (
    <CardContainer>
      <CardImage
        src={imageSource + product.imageUrl}
        alt={product.name}
        data-cy={`card-${product.name}-img`}
      />
      <CardInformation>
        <CardName data-cy={`card-${product.name}`}>{product.name}</CardName>
        <CardPrice data-cy={`card-${product.name}-price`}>
          ${product.price}
        </CardPrice>
      </CardInformation>
      <CardFooter>
        <ProductCardButton
          onClick={() => dispatch(addProductToCart({ product }))}
          data-cy={`card-${product.name}-button`}
        >
          Add item
        </ProductCardButton>
      </CardFooter>
    </CardContainer>
  );
}
