import 'match-media-mock';

import StoreSlider from '.';

import mock from './mock';
import { renderWithTheme } from 'utils/tests/helper';

describe('<StoreSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<StoreSlider items={mock} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });
});
