import { Story, Meta } from '@storybook/react';
import RecipeSlider, { RecipeSliderProps } from '.';

import items from './mock';

export default {
  title: 'RecipeSlider',
  args: { items },
  component: RecipeSlider
} as Meta;

export const Default: Story<RecipeSliderProps> = (args) => (
  <RecipeSlider {...args} />
);
