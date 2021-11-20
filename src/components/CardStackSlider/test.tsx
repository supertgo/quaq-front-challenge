import 'match-media-mock';
import { render } from '@testing-library/react';

import CardStackSlider from '.';

import mock from './mock';

describe('<CardStackSlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardStackSlider items={mock} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });
});
