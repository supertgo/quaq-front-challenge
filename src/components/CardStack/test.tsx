import { render, screen } from '@testing-library/react';

import CardStack from '.';

const props = {
  img: 'img/mercado.png',
  title: 'Mercado'
};

describe('<CardStack />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardStack {...props} />);

    expect(
      screen.getByRole('img', { name: /mercado image/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/mercado/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 8rem;
        height: 8rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c1 {
        width: 100%;
      }

      <main
        class="c0"
      >
        <img
          alt="Mercado image"
          class="c1"
          src="img/mercado.png"
        />
        <span
          class=""
        >
          Mercado
        </span>
      </main>
    `);
  });
});
