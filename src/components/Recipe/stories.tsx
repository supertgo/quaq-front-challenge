import { Story, Meta } from '@storybook/react';
import Recipe, { RecipeProps } from '.';

export default {
  title: 'Recipe',
  component: Recipe
} as Meta;

export const Default: Story<RecipeProps> = (args) => <Recipe {...args} />;

Default.args = {
  img: '/img/pudim.jpeg',
  title: 'O melhor pudim do mundo',
  description: 'Com doce caseiro de ameixas pretas...',
  price: '14,90'
};
