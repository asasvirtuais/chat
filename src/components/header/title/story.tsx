import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderTitle } from './index'

const meta: Meta<typeof HeaderTitle> = {
  title: 'Components/Header/Title',
  component: HeaderTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    fontSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'Chat Title',
    placeholder: 'Enter title...',
  },
}

export const Large: Story = {
  args: {
    value: 'Large Header Title',
    fontSize: '2xl',
    fontWeight: 'bold',
  },
}

export const Medium: Story = {
  args: {
    value: 'Medium Header Title',
    fontSize: 'lg',
    fontWeight: 'semibold',
  },
}

export const Empty: Story = {
  args: {
    value: '',
    placeholder: 'Click to edit title...',
  },
}