import type { Meta, StoryObj } from '@storybook/react'
import { MessageMenu } from './index'

const meta: Meta<typeof MessageMenu> = {
  title: 'Components/Message/Menu',
  component: MessageMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleMenuItems = [
  {
    id: '1',
    label: 'Reply',
    onClick: () => console.log('Reply clicked'),
    icon: '↩️',
  },
  {
    id: '2',
    label: 'Edit',
    onClick: () => console.log('Edit clicked'),
    icon: '✏️',
  },
  {
    id: '3',
    label: 'Delete',
    onClick: () => console.log('Delete clicked'),
    icon: '🗑️',
  },
]

export const Default: Story = {
  args: {
    items: sampleMenuItems,
  },
}

export const WithDisabled: Story = {
  args: {
    items: [
      ...sampleMenuItems,
      {
        id: '4',
        label: 'Disabled Action',
        disabled: true,
        icon: '🚫',
      },
    ],
  },
}

export const CustomTrigger: Story = {
  args: {
    items: sampleMenuItems,
    trigger: '⚙️',
  },
}

export const WithoutIcons: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'Copy',
        onClick: () => console.log('Copy clicked'),
      },
      {
        id: '2',
        label: 'Share',
        onClick: () => console.log('Share clicked'),
      },
      {
        id: '3',
        label: 'Report',
        onClick: () => console.log('Report clicked'),
      },
    ],
  },
}