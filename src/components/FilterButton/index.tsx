import * as S from './styles';

export type FilterButtonProps = {
  icon?: React.ReactNode;
  children: string;
  iconAligment?: 'left' | 'right';
};

const FilterButton = ({
  icon,
  children,
  iconAligment = 'left'
}: FilterButtonProps) => (
  <S.Wrapper iconAligment={iconAligment}>
    <S.Text>{children}</S.Text>
    {!!icon && icon}
  </S.Wrapper>
);

export default FilterButton;
