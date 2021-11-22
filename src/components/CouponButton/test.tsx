import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CouponButton from '.';

describe('<CouponButton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CouponButton />);

    expect(
      screen.getByText('Clube Ifood pra quem ama cupom')
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
