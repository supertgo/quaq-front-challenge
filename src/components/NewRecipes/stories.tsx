import { Story, Meta } from '@storybook/react';
import NewRecipes, { NewRecipesProps } from '.';

export default {
  title: 'NewRecipes',
  component: NewRecipes
} as Meta;

export const Default: Story<NewRecipesProps> = (args) => (
  <NewRecipes {...args} />
);

Default.args = {
  title: 'Camarão Coco Brasil (Meio ou Inteiro)',
  img: '/img/meio-camarao.jpg'
};
