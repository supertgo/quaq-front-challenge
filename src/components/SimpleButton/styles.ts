import styled, { css } from 'styled-components';
import { SimpleButtonProps } from '.';

type WrapperProps = Pick<SimpleButtonProps, 'size' | 'arrowAligment'>;

const wrapperModiffiers = {
  small: () => css`
    width: 10rem;
  `,
  medium: () => css`
    width: 20rem;
  `,
  down: () => css``,
  right: () => css`
    svg {
      transform: rotate(-90deg);
    }
  `,
  left: () => css`
    svg {
      transform: rotate(90deg);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, arrowAligment }) => css`
    border: none;
    padding: 1rem;
    border-radius: ${theme.border.small};
    background-color: ${theme.colors.lightGray};

    ${!!size && wrapperModiffiers[size]()}
    ${!!arrowAligment && wrapperModiffiers[arrowAligment]()}
  `}
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
