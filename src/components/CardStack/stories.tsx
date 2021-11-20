import { Story, Meta } from '@storybook/react';
import CardStack, { CardStackProps } from '.';

export default {
  title: 'CardStack',
  component: CardStack
} as Meta;

export const Default: Story<CardStackProps> = (args) => <CardStack {...args} />;

Default.args = {
  img: 'img/mercado.png',
  title: 'Mercado'
};
