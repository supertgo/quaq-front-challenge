import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/home icon/i)).toBeInTheDocument();
    expect(screen.getByText('Início')).toBeInTheDocument();

    expect(screen.getByLabelText(/search icon/i)).toBeInTheDocument();
    expect(screen.getByText(/busca/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/FoodMenu icon/i)).toBeInTheDocument();
    expect(screen.getByText(/pedidos/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/person icon/i)).toBeInTheDocument();
    expect(screen.getByText(/perfil/i)).toBeInTheDocument();
  });
});
