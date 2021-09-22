import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';


export default {
    title: 'UI Components/Sidebar',
    component: Sidebar,
} as Meta;

const Template: Story = () => <Sidebar />;

export const SidebarExample = Template.bind({});