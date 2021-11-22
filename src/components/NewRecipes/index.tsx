import * as S from './styles';

export type NewRecipesProps = {
  img: string;
  title: string;
};

const NewRecipes = ({ img, title }: NewRecipesProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>
        Lorem Ipsum is simply dummy text of the printing.
      </S.Description>
    </S.Content>
    <S.BannerImage>
      <S.Image src={img} alt={`${title} image`} />
    </S.BannerImage>
  </S.Wrapper>
);

export default NewRecipes;
