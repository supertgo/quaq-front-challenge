import { Story, Meta } from '@storybook/react';
import StoreSlider, { StoreSliderProps } from '.';

import items from './mock';

export default {
  title: 'StoreSlider',
  args: { items },
  component: StoreSlider
} as Meta;

export const Default: Story<StoreSliderProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <StoreSlider {...args} />
  </div>
);
