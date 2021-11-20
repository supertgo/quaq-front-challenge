import * as S from './styles';

export type RecipeProps = {
  img: string;
  title: string;
  description: string;
  price: string;
};

const Recipe = ({ img, title, description, price }: RecipeProps) => (
  <S.Wrapper>
    <S.BannerImage>
      <S.Image src={img} alt={`${title} image`} />
    </S.BannerImage>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.PriceWrapper>
        <S.PriceText>A patir de</S.PriceText>
        <S.Price>{price}</S.Price>
      </S.PriceWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Recipe;
