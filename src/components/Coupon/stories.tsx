import { Story, Meta } from '@storybook/react';
import Coupon, { CouponProps } from '.';

export default {
  title: 'Coupon',
  component: Coupon
} as Meta;

export const Default: Story<CouponProps> = (args) => <Coupon {...args} />;

Default.args = {
  img: 'img/feijoada.png'
};
