import { Story, Meta } from '@storybook/react';
import CardStackSlider, { CardStackSliderProps } from '.';

const items = [
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  },
  {
    img: 'img/mercado.png',
    title: 'Mercado'
  }
];

export default {
  title: 'CardStackSlider',
  args: { items },
  component: CardStackSlider
} as Meta;

export const Default: Story<CardStackSliderProps> = (args) => (
  <CardStackSlider {...args} />
);
