import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  width: 30rem;
  height: 18rem;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.border.medium};
  `}
`;
