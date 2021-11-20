import * as S from './styles';

export type CardStackProps = {
  img: string;
  title: string;
};

const CardStack = ({ img, title }: CardStackProps) => (
  <S.Wrapper>
    <S.Image src={img} alt={`${title} image`} />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default CardStack;
