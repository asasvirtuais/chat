import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChatInput } from './index'
import InputTextarea from './textarea'
import InputMenu from './menu'
import { Box, MenuItem } from '@chakra-ui/react'
import { InputSend } from './send'

const meta: Meta<typeof ChatInput> = {
  title: 'Components/Input',
  component: ({children}) => (
    <Box h='100dvh' display='flex' alignItems='flex-end' justifyContent='flex-end'>
      <ChatInput>{children}</ChatInput>
    </Box>
  ),
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