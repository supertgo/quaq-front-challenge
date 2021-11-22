import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    border-radius: ${theme.border.small};
    background-color: ${theme.colors.lightGreen};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    color: ${theme.colors.green};

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;
