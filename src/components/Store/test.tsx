import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Store from '.';

const props = {
  img: '/img/grill.png',
  name: 'It´s Grill Shopping'
};

describe('<Store />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Store {...props} />);

    expect(
      screen.getByRole('img', { name: /It´s Grill Shopping photo/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/It´s Grill Shopping/i)).toBeInTheDocument();
  });
});
