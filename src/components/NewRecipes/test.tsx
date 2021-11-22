import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import NewRecipes from '.';

const props = {
  title: 'Camarão Coco Brasil (Meio ou Inteiro)',
  img: '/img/meio-camarao.jpg'
};

describe('<NewRecipes />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NewRecipes {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Camarão Coco Brasil/i })
    ).toBeInTheDocument();
  });
});
