import { Story, Meta } from '@storybook/react';
import SimpleButton, { SimpleButtonProps } from '.';

export default {
  title: 'SimpleButton',
  component: SimpleButton
} as Meta;

export const Default: Story<SimpleButtonProps> = (args) => (
  <SimpleButton {...args} />
);

Default.args = {
  children: 'Entrega'
};
