import 'match-media-mock';
import { screen } from '@testing-library/react';

import Home from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />);

    expect(screen.getByText('Restaurantes')).toBeInTheDocument();
  });
});
