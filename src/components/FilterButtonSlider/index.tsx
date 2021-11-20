import FilterButton, { FilterButtonProps } from 'components/FilterButton';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type FilterButtonSliderProps = {
  items: FilterButtonProps[];
};

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 5
};

const FilterButtonSlider = ({ items }: FilterButtonSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <FilterButton key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default FilterButtonSlider;
