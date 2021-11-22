import Heading from 'components/Heading';
import SimpleButton from 'components/SimpleButton';
import RecipeSlider from 'components/RecipeSlider';
import NewRecipes from 'components/NewRecipes';

import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { StarHalf } from '@styled-icons/bootstrap/StarHalf';
import { Search } from '@styled-icons/bootstrap/Search';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { ShareIos } from '@styled-icons/fluentui-system-filled/ShareIos';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

import recipeMock from 'components/RecipeSlider/mock';

import * as S from './styles';
import CouponButton from 'components/CouponButton';

export type PageStoreProps = {
  cover: string;
  name: string;
};

const PageStore = ({ cover, name }: PageStoreProps) => (
  <S.Wrapper>
    <S.Cover src={cover}>
      <S.IconWrapper>
        <ArrowIosBackOutline />
      </S.IconWrapper>

      <div>
        <S.IconWrapper>
          <ShareIos />
        </S.IconWrapper>
        <S.IconWrapper>
          <Heart />
        </S.IconWrapper>
      </div>
    </S.Cover>

    <S.Content>
      <S.StoreInformation>
        <div>
          <S.Title>{name}</S.Title>
          <S.AddtionalInformation>
            Frutos do Mar 4,2 km $
          </S.AddtionalInformation>
        </div>

        <S.Image src="/img/coco-bambu.png" />
      </S.StoreInformation>

      <S.SectionButtons>
        <SimpleButton>Entrega</SimpleButton>
        <SimpleButton size="medium">Hoje, 60-70 min R$ 11,90</SimpleButton>
      </S.SectionButtons>

      <S.Ratting>
        <S.Stars>
          <b>4,4</b>
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarHalf />
        </S.Stars>
        <S.Avaliation>999+ avaliações</S.Avaliation>
      </S.Ratting>

      <S.PriceWrapper>
        <S.Price>
          Pedido mínimo <b>RS 35,00</b>
        </S.Price>
        <Search size={22} />
      </S.PriceWrapper>

      <S.ButtonWrapper>
        <CouponButton />
      </S.ButtonWrapper>

      <S.SectionOffers>
        <Heading>Ofertas</Heading>
        <RecipeSlider items={recipeMock} />
      </S.SectionOffers>

      <S.Divider />

      <Heading>Lançamentos</Heading>

      <S.Divider />

      <S.SectionNewRecipes>
        <NewRecipes
          title="Camarão Coco Brasil (Meio ou Inteiro)"
          img={'/img/meio-camarao.jpg'}
        />
      </S.SectionNewRecipes>
    </S.Content>
  </S.Wrapper>
);

export default PageStore;
