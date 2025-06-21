import type { Meta, StoryObj } from '@storybook/react'
import { HeaderMenu } from './index'

const meta: Meta<typeof HeaderMenu> = {
  title: 'Components/Header/Menu',
  component: HeaderMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleMenuItems = [
  {
    id: '1',
    label: 'Home',
    onClick: () => console.log('Home clicked'),
  },
  {
    id: '2',
    label: 'About',
    onClick: () => console.log('About clicked'),
  },
  {
    id: '3',
    label: 'Contact',
    onClick: () => console.log('Contact clicked'),
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
        label: 'Disabled',
        disabled: true,
      },
    ],
  },
}

export const Empty: Story = {
  args: {
    items: [],
  },
}