import React from 'react';
import { Story, Meta } from '@storybook/react';
import  Card1  from './Card1';


export default {
    title: 'UI Components/Card1',
    component: Card1,
} as Meta;

const Template: Story = () => <Card1 />;

export const Card1Example = Template.bind({});