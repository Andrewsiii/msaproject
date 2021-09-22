import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NHeader} from './Header';

export default {
  title: 'UI Components/Header',
  component: NHeader,
} as Meta;

const Template: Story = () => <NHeader />;
export const HeaderExample = Template.bind({});