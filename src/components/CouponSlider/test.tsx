import 'match-media-mock';
import CouponSlider from '.';

import mock from './mock';
import { renderWithTheme } from 'utils/tests/helper';

describe('<CouponSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CouponSlider items={mock} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(1);
  });
});
