import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FilterButton from '.';

describe('<FilterButton />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FilterButton>firebutton</FilterButton>);

    expect(screen.getByText(/firebutton/i)).toBeInTheDocument();
  });
});
