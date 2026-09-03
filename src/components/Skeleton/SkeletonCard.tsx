import {
  Body,
  CardRoot,
  ImageBox,
  MetaRow,
  Shimmer,
  SkeletonBar,
} from '@/components/Card/Card.style';

export default function SkeletonCard() {
  return (
    <CardRoot data-cy="skeleton-card" aria-hidden="true">
      <ImageBox data-cy="skeleton-image">
        <Shimmer />
      </ImageBox>
      <Body>
        <SkeletonBar $w="65%" $h={22} data-cy="skeleton-name" />
        <MetaRow>
          <SkeletonBar $w="28%" $h={16} data-cy="skeleton-price" />
          <SkeletonBar $w="78px" $h={30} $round data-cy="skeleton-button" />
        </MetaRow>
      </Body>
    </CardRoot>
  );
}
