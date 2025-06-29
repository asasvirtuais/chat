import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChatInput } from './index'
import InputTextarea from './textarea'
import InputMenu from './menu'
import { MenuItem } from '@chakra-ui/react'
import { InputSend } from './send'

const meta: Meta<typeof ChatInput> = {
  title: 'Components/Input',
  component: ChatInput,
}

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    children: (
      <>
        <InputMenu>
          <MenuItem>Menu item 1</MenuItem>
          <MenuItem>Menu item 2</MenuItem>
          <MenuItem>Menu item 3</MenuItem>
        </InputMenu>
        <InputTextarea/>
        <InputSend/>
      </>
    )
  }
}