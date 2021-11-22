import styled, { css } from 'styled-components';

import * as SimpleButtonStyles from 'components/SimpleButton/styles';

export const Wrapper = styled.main``;

export const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0 ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} 0;

    ${SimpleButtonStyles.Wrapper} {
      padding: 0;
      width: 15rem;
      border-radius: ${theme.border.medium};
      justify-content: center;
      font-weight: ${theme.font.bold};
      background-color: ${theme.colors.lightGray};

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    ${SimpleButtonStyles.Content} {
      justify-content: center;
    }
    ${SimpleButtonStyles.Text} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const Places = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 1px solid ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xsmall};

    & > span:first-child {
      color: ${theme.colors.red};
      font-weight: ${theme.font.bold};
      border-bottom: 3px solid ${theme.colors.red};
    }
  `}
`;

export const Place = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const SectionFilters = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const SectionCoupon = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const SectionStore = styled.section``;

export const StoreHeader = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    display: flex;
    justify-content: space-between;

    p {
      cursor: pointer;
      color: ${theme.colors.red};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
    }
  `}
`;
