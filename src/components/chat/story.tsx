import type { Meta, StoryObj } from '@storybook/react'
import { ChatLayout } from './index'

const meta: Meta<typeof ChatLayout> = {
  title: 'Components/Chat',
  component: ChatLayout,
}

export default meta
type Story = StoryObj<typeof meta>

export const Chat: Story = {
}