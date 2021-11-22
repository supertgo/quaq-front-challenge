import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import PageStore from '.';

const props = {
  cover: '/img/frutos-mar.png',
  name: 'Coco Bambu - Curitiba'
};

describe('<PageStore />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PageStore {...props} />);

    expect(screen.getByText('Frutos do Mar 4,2 km $')).toBeInTheDocument();
  });
});
