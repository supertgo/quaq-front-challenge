import { Story, Meta } from '@storybook/react';
import Store, { StoreProps } from '.';

export default {
  title: 'Store',
  component: Store
} as Meta;

export const Default: Story<StoreProps> = (args) => <Store {...args} />;

Default.args = {
  img: '/img/grill.png',
  name: 'It´s Grill Shopping'
};
