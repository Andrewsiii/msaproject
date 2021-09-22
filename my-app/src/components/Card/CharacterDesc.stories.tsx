import React from 'react';
import { Story, Meta } from '@storybook/react';
import CharacterDesc from './CharacterDesc';


export default {
    title: 'UI Components/CharacterDesc',
    component: CharacterDesc,
} as Meta;

const Template: Story = (args) => <CharacterDesc Description={'Description Here'}  />;

export const CharacterDescExample = Template.bind({});
CharacterDescExample.args = {
    description: "description2"
};