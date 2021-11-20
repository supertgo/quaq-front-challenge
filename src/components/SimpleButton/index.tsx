import { ArrowIosDownwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type SimpleButtonProps = {
  children: string;
  size?: 'small' | 'medium';
  arrowAligment?: 'right' | 'down' | 'left';
} & ButtonType;

const SimpleButton = ({
  children,
  size = 'small',
  arrowAligment = 'down'
}: SimpleButtonProps) => (
  <S.Wrapper size={size} arrowAligment={arrowAligment}>
    <S.Content>
      <S.Text>{children}</S.Text>
      <ArrowIcon color="red" size={22} />
    </S.Content>
  </S.Wrapper>
);

export default SimpleButton;
