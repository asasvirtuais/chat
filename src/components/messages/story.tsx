import type { Meta, StoryObj } from '@storybook/react'
import { ChatMessages } from './index'

const meta: Meta<typeof ChatMessages> = {
  title: 'Components/Messages',
}

export default meta
type Story = StoryObj<typeof meta>

export const Messages: Story = {}
