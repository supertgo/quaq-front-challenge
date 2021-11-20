import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Coupon from '.';

describe('<Coupon />', () => {
  it('should render the coupon', () => {
    renderWithTheme(<Coupon img="img/feijoada.png" />);

    expect(
      screen.getByRole('img', { name: /Coupon image/i })
    ).toBeInTheDocument();
  });
});
