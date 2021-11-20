import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  width: 7rem;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 6rem;
  border-radius: 50%;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
  `}
`;
