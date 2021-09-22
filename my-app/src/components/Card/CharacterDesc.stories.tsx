import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CharacterDesc from './CharacterDesc';


export default {
    title: 'UI Components/CharacterDesc',
    component: CharacterDesc,
    argTypes: {
        Description: { control: "Change Description" },
      },
} as ComponentMeta<typeof CharacterDesc>;

const Template: ComponentStory<typeof CharacterDesc> = (args) => <CharacterDesc {...args}  />;

export const CharacterDescExample = Template.bind({});
CharacterDescExample.args = {
    Description: "description"
};