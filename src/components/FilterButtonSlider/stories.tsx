import { Story, Meta } from '@storybook/react';
import FilterButtonSlider, { FilterButtonSliderProps } from '.';

import { ArrowIosDownwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

const items = [
  {
    children: 'Preço'
  },
  {
    children: 'Preço',
    icon: <ArrowIcon size={22} />
  },
  {
    children: 'Preço',
    icon: <ArrowIcon size={22} />,
    iconAligment: 'left'
  },
  {
    children: 'Preço'
  },
  {
    children: 'Preço',
    icon: <ArrowIcon size={22} />
  },
  {
    children: 'Preço',
    icon: <ArrowIcon size={22} />,
    iconAligment: 'left'
  }
];

export default {
  title: 'FilterButtonSlider',
  args: { items },
  component: FilterButtonSlider
} as Meta;

export const Default: Story<FilterButtonSliderProps> = (args) => (
  <FilterButtonSlider {...args} />
);
