import 'match-media-mock';

import items from './mock';

import RecipeSlider from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<RecipeSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<RecipeSlider items={items} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(6);
  });
});
