import { Story, Meta } from '@storybook/react';
import CouponSlider, { CouponSliderProps } from '.';

import items from './mock';

export default {
  title: 'CouponSlider',
  args: { items },
  component: CouponSlider
} as Meta;

export const Default: Story<CouponSliderProps> = (args) => (
  <CouponSlider {...args} />
);
