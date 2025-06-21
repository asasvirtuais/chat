import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderTitle } from './index'

const meta: Meta<typeof HeaderTitle> = {
  title: 'Components/Header/Title',
  component: HeaderTitle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    defaultValue: 'Chat Title',
  },
}