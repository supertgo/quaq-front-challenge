import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import SimpleButton from '.';

describe('<SimpleButton />', () => {
  it('should render the default button', () => {
    renderWithTheme(<SimpleButton>Simple</SimpleButton>);

    expect(screen.getByRole('button', { name: /Simple/i })).toHaveStyle({
      width: '10rem'
    });
  });

  it('should render the medium button', () => {
    renderWithTheme(<SimpleButton size="medium">Simple</SimpleButton>);

    expect(screen.getByRole('button', { name: /Simple/i })).toHaveStyle({
      width: '20rem'
    });
  });
});
