import Recipe, { RecipeProps } from 'components/Recipe';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type RecipeSliderProps = {
  items: RecipeProps[];
};

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 6,
  infinite: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4.7
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 4.5
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 4.1
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 3.1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2.6
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2.3
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 2.1
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1.9
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1.6
      }
    }
  ]
};

const RecipeSlider = ({ items }: RecipeSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Recipe key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default RecipeSlider;
