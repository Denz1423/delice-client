import { Skeleton } from '@mui/material';
import {
  CardContainer,
  CardInformation,
  CardFooter,
} from '@/components/Card/Card.style';

export default function SkeletonCard() {
  return (
    <CardContainer data-cy="skeleton-card">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="70%"
        sx={{ height: '325px' }}
        animation="wave"
        data-cy="skeleton-image"
      />

      <CardInformation>
        <Skeleton
          width="60%"
          height={28}
          sx={{ mb: 1 }}
          animation="wave"
          data-cy="skeleton-name"
        />
        <Skeleton
          width="40%"
          height={24}
          animation="wave"
          data-cy="skeleton-price"
        />
      </CardInformation>

      <CardFooter>
        <Skeleton
          variant="rounded"
          width={100}
          height={36}
          animation="wave"
          data-cy="skeleton-button"
        />
      </CardFooter>
    </CardContainer>
  );
}
