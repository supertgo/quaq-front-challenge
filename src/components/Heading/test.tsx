import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading title="Title" />);

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });
});
