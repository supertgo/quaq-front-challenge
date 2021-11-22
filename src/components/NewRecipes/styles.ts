import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  cursor: pointer;
  grid-template-columns: 1.5fr 0.5fr;
  max-width: 40rem;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 30rem;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const BannerImage = styled.div`
  width: 10rem;
  height: 10rem;
`;

export const Image = styled.img`
  width: 100%;
`;
