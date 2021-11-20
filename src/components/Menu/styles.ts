import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    z-index: ${theme.layers.base};
  `}
`;
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};

    svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
