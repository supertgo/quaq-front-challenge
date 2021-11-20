import styled, { css } from 'styled-components';
import { FilterButtonProps } from '.';

type WrapperProps = Pick<FilterButtonProps, 'iconAligment'>;

const wrapperModiffiers = {
  left: () => css`
    flex-direction: row-reverse;
  `,
  right: () => css`
    flex-direction: row;
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, iconAligment }) => css`
    height: 3.2rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.lightGray};
    border-radius: 1.6rem;

    ${!!iconAligment && wrapperModiffiers[iconAligment]()};
  `}
`;

export const Text = styled.span``;

export const Icon = styled.div``;
