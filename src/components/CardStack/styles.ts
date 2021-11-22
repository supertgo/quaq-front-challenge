import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  width: 8rem;
  height: 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
