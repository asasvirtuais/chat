import type { Meta, StoryObj } from '@storybook/react'
import { InputMenu } from './index'

const meta: Meta<typeof InputMenu> = {
  title: 'Components/Input/Menu',
  component: InputMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleItems = [
  {
    id: '1',
    label: 'Option 1',
    value: 'option1',
  },
  {
    id: '2',
    label: 'Option 2',
    value: 'option2',
  },
  {
    id: '3',
    label: 'Option 3',
    value: 'option3',
  },
]

export const Default: Story = {
  args: {
    items: sampleItems,
    placeholder: 'Choose an option...',
  },
}

export const WithDisabled: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        id: '4',
        label: 'Disabled Option',
        value: 'disabled',
        disabled: true,
      },
    ],
    placeholder: 'Select from menu...',
  },
}

export const Empty: Story = {
  args: {
    items: [],
    placeholder: 'No options available',
  },
}