import type { Meta, StoryObj } from '@storybook/react'
import { Messages } from './index'

const meta: Meta<typeof Messages> = {
  title: 'Components/Messages',
  component: Messages,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleMessages = [
  {
    id: '1',
    content: 'Hello there!',
    author: 'John',
    timestamp: '10:30 AM',
    variant: 'received' as const,
  },
  {
    id: '2',
    content: 'Hi! How are you doing?',
    author: 'You',
    timestamp: '10:31 AM',
    variant: 'sent' as const,
  },
  {
    id: '3',
    content: 'I\'m doing great, thanks for asking!',
    author: 'John',
    timestamp: '10:32 AM',
    variant: 'received' as const,
  },
]

export const Default: Story = {
  args: {
    messages: sampleMessages,
  },
}

export const Empty: Story = {
  args: {
    messages: [],
  },
}

export const SingleMessage: Story = {
  args: {
    messages: [sampleMessages[0]],
  },
}