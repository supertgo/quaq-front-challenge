import styled, { css } from 'styled-components';

export const Wrapper = styled.main``;

type CoverProps = {
  src: string;
};

export const Content = styled.div`
  padding: 0.5rem;
`;

export const Cover = styled.div<CoverProps>`
  ${({ theme, src }) => css`
    display: flex;
    align-items: end;
    justify-content: space-between;
    height: 18rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;

    svg {
      cursor: pointer;
      margin: ${theme.spacings.xxsmall};
      color: ${theme.colors.white};
      width: 3rem;
      height: 3rem;
    }

    & > div {
      display: flex;
    }
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.51);
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;

export const StoreInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const AddtionalInformation = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Image = styled.img`
  border-radius: 100%;
  height: 4.2rem;
  width: 4.2rem;
`;

export const LogoWrapper = styled.div``;

export const SectionButtons = styled.div`
  button {
    margin: 0.2rem;
  }
`;

export const Ratting = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: ${theme.spacings.xsmall} 0;

    svg {
      margin: 0 5px;
      width: 1.5rem;
      height: 1.5rem;
      color: ${theme.colors.orange};
    }
  `}
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const Avaliation = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 2px solid lightgray;
  `}
`;

export const Price = styled.span``;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: ${theme.spacings.xsmall} 0;
  `}
`;

export const SectionOffers = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    h2 {
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    border-bottom: 2px solid lightgray;
    margin: ${theme.spacings.small} 0;
  `}
`;

export const SectionNewRecipes = styled.div``;
