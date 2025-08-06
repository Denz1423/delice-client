import {
  CardContainer,
  CardInformation,
  CardFooter,
} from '@/components/Card/Card.style';
import { Skeleton } from '@radix-ui/themes';

export default function SkeletonCard() {
  return (
    <CardContainer data-cy="skeleton-card">
      <Skeleton width="100%" height="325px" data-cy="skeleton-image" />

      <CardInformation>
        <Skeleton
          width="60%"
          height="28px"
          style={{ marginBottom: 1 }}
          data-cy="skeleton-name"
        />
        <Skeleton width="40%" height="24px" data-cy="skeleton-price" />
      </CardInformation>

      <CardFooter>
        <Skeleton width="100px" height="36px" data-cy="skeleton-button" />
      </CardFooter>
    </CardContainer>
  );
}
