import 'match-media-mock';

import CardStackSlider from '.';

import mock from './mock';
import { renderWithTheme } from 'utils/tests/helper';

describe('<CardStackSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardStackSlider items={mock} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });
});
