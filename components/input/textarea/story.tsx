import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Textarea } from './index'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Input/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
}

export const WithValue: Story = {
  args: {
    value: 'This is some sample text in the textarea that demonstrates the autoresize functionality.',
    placeholder: 'Enter your message...',
  },
}

export const Disabled: Story = {
  args: {
    value: 'This textarea is disabled',
    disabled: true,
  },
}

export const CustomHeight: Story = {
  args: {
    placeholder: 'Custom height textarea...',
    minH: '50px',
    maxH: '200px',
  },
}

export const WithMaxLength: Story = {
  args: {
    placeholder: 'Maximum 100 characters...',
    maxLength: 100,
  },
}

export const LongText: Story = {
  args: {
    value: 'This is a very long text that demonstrates how the textarea automatically resizes to accommodate more content. The textarea will grow vertically as more text is added, up to the maximum height specified.',
  },
}