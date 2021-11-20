import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Recipe from '.';

const props = {
  img: '/img/pudim.jpeg',
  title: 'O melhor pudim do mundo',
  description: 'Com doce caseiro de ameixas pretas...',
  price: '14,90'
};

describe('<Recipe />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Recipe {...props} />);

    expect(
      screen.getByRole('img', { name: /O melhor pudim do mundo image/i })
    ).toBeInTheDocument();

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.price)).toBeInTheDocument();
  });
});
