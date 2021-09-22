import React from 'react';
import { Story, Meta } from '@storybook/react';
import  Card2  from './Card2';


export default {
    title: 'UI Components/Card2',
    component: Card2,
} as Meta;

const Template: Story = () => <Card2 />;

export const Card1Example = Template.bind({});