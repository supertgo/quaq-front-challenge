import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 15rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: ${theme.border.small};
  `}
`;

export const BannerImage = styled.div``;

export const Image = styled.img`
  width: 100%;
  max-height: 10rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall} 0;
  `}
`;

export const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PriceText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: ${theme.font.sizes.small};
  `}
`;
