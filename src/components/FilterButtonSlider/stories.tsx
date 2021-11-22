import { Story, Meta } from '@storybook/react';
import FilterButtonSlider, { FilterButtonSliderProps } from '.';

import items from './mock';

export default {
  title: 'FilterButtonSlider',
  args: { items },
  component: FilterButtonSlider
} as Meta;

export const Default: Story<FilterButtonSliderProps> = (args) => (
  <FilterButtonSlider {...args} />
);
