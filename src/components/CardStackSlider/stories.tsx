import { Story, Meta } from '@storybook/react';
import CardStackSlider, { CardStackSliderProps } from '.';

import items from './mock';

export default {
  title: 'CardStackSlider',
  args: { items },
  component: CardStackSlider
} as Meta;

export const Default: Story<CardStackSliderProps> = (args) => (
  <CardStackSlider {...args} />
);
