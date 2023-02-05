import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TextInput } from './TextInput'

export default {
  title: 'Forms/TextInput',
  component: TextInput
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Email',
  placeholder: 'you@example.com'
}
export const Disable = Template.bind({})
Disable.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  error: 'Error'
}
