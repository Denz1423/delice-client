import {
  FormContainer,
  FormInputContainer,
  HomeContainer,
  TableInput,
  TableLabel,
  Highlight,
  Bar,
  WhiteSpace,
  HomeImage,
  TableNumberError,
} from './Home.style';
import DeliceLogo from '/Delice-circle.png';
import { HomeButton } from '@/components/button/Button.style';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setTableNumber } from '@/services/state/HeaderSlice';
import { clearCart } from '@/services/state/CartSlice';

type FormInputs = {
  tableNumber: number;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInputs> = ({ tableNumber }) => {
    dispatch(setTableNumber(tableNumber));
    dispatch(clearCart());
    navigate(`/${tableNumber}/menu`);
  };

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        <HomeImage src={DeliceLogo} alt="DeliceLogo"></HomeImage>
        <br />
        <FormInputContainer>
          <TableInput
            type="number"
            data-cy="tableInput"
            required
            {...register('tableNumber', {
              required: 'Please enter your table number',
              min: {
                value: 1,
                message: 'Table number does not exist (1-20 only)',
              },
              max: {
                value: 20,
                message: 'Table number does not exist (1-20 only)',
              },
            })}
          />
          <Highlight />
          <Bar />
          <TableLabel>Table Number</TableLabel>
          {errors.tableNumber && (
            <TableNumberError data-cy="tableInput-error">
              {errors.tableNumber?.message}
            </TableNumberError>
          )}
        </FormInputContainer>
        <WhiteSpace />
        <HomeButton type="submit" data-cy="submit">
          Next
        </HomeButton>
      </FormContainer>
    </HomeContainer>
  );
}
