import { Story, Meta } from '@storybook/react';
import FilterButton, { FilterButtonProps } from '.';

import { ArrowIosDownwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

export default {
  title: 'FilterButton',
  component: FilterButton
} as Meta;

export const Default: Story<FilterButtonProps> = (args) => (
  <FilterButton {...args} />
);

Default.args = {
  children: 'Preço'
};

export const WithIcon: Story<FilterButtonProps> = (args) => (
  <FilterButton {...args} />
);

WithIcon.args = {
  children: 'Preço',
  icon: <ArrowIcon size={22} />
};
