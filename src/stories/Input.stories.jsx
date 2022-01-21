import React from 'react';

import Input from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Input',
    component: Input,
    
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // level: 1,
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const InputExample = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputExample.args = {
    name: 'sample-name',
    label: 'Sample Input',
};

export const InputMaskExample = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputMaskExample.args = {
    name: 'sample-name',
    label: 'Sample Input',
    mask: '99-99-9999'
};
