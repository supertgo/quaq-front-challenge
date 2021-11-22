import CardStackSlider from 'components/CardStackSlider';
import CouponSlider from 'components/CouponSlider';
import FilterButtonSlider from 'components/FilterButtonSlider';
import Menu from 'components/Menu';
import StoreSlider from 'components/StoreSlider';

import * as S from './styles';

import filtersMock from 'components/FilterButtonSlider/mock';
import cardMock from 'components/CardStackSlider/mock';
import couponMock from 'components/CouponSlider/mock';
import storeMock from 'components/StoreSlider/mock';
import Heading from 'components/Heading';
import SimpleButton from 'components/SimpleButton';

import { Ifood } from '@styled-icons/simple-icons/Ifood';

const Home = () => (
  <S.Wrapper>
    <S.Top>
      <SimpleButton>R.São Pedro, 261</SimpleButton>
      <Ifood size={22} color="red" />
    </S.Top>

    <S.Places>
      <S.Place>Restaurantes</S.Place>
      <S.Place>Mercados</S.Place>
    </S.Places>

    <S.SectionFilters>
      <FilterButtonSlider items={filtersMock} />
    </S.SectionFilters>

    <CardStackSlider items={cardMock} />
    <S.SectionCoupon>
      <CouponSlider items={couponMock} />
    </S.SectionCoupon>

    <S.SectionStore>
      <S.StoreHeader>
        <Heading>Útilmas lojas</Heading>
        <p>Ver mais</p>
      </S.StoreHeader>
      <StoreSlider items={storeMock} />
    </S.SectionStore>
    <Menu />
  </S.Wrapper>
);

export default Home;
