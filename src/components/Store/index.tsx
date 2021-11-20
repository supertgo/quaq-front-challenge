import * as S from './styles';

export type StoreProps = {
  name: string;
  img: string;
};

const Store = ({ name, img }: StoreProps) => (
  <S.Wrapper>
    <S.Image src={img} alt={`${name} photo`} />
    <S.Title>{name}</S.Title>
  </S.Wrapper>
);

export default Store;
