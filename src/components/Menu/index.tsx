import * as S from './styles';

import { Home as HomeIcon } from '@styled-icons/material-outlined/Home';

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import { FoodMenu as FoodMenuIcon } from '@styled-icons/boxicons-regular/FoodMenu';

import { PersonFill as PersonFillIcon } from '@styled-icons/octicons/PersonFill';

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <HomeIcon aria-label="Home icon" />
      <S.Title>Início</S.Title>
    </S.IconWrapper>

    <S.IconWrapper>
      <SearchIcon aria-label="Search icon" />
      <S.Title>Busca</S.Title>
    </S.IconWrapper>

    <S.IconWrapper>
      <FoodMenuIcon aria-label="FoodMenu icon" />
      <S.Title>Pedidos</S.Title>
    </S.IconWrapper>

    <S.IconWrapper>
      <PersonFillIcon aria-label="Person icon" />
      <S.Title>Perfil</S.Title>
    </S.IconWrapper>
  </S.Wrapper>
);

export default Menu;
