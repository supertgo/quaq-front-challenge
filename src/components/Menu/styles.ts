import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    padding: ${theme.spacings.xsmall} 0;
    z-index: ${theme.layers.base};
    background-color: ${theme.colors.white};
  `}
`;
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.small} 0 ${theme.spacings.small};

    svg {
      width: 3rem;
      height: 2.5rem;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
