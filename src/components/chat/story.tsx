import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChatLayout } from './index'
import { Menu, MenuItem } from '@chakra-ui/react'
import ChatHeader from '../header'
import HeaderMenu from '../header/menu'
import HeaderTitle from '../header/title'
import ChatInput from '../input'
import InputMenu from '../input/menu'
import { InputSend } from '../input/send'
import InputTextarea from '../input/textarea'
import ChatMessages from '../messages'

const meta: Meta<typeof ChatLayout> = {
  title: 'Components/Chat',
  component: ChatLayout,
}

export default meta
type Story = StoryObj<typeof meta>

export const Chat: Story = {
  args: {
    children: (
      <>
        <ChatHeader>
          <HeaderTitle defaultValue='Chat Title'/>
          <HeaderMenu>
            <Menu.Item>Menu item 1</Menu.Item>
            <Menu.Item>Menu item 2</Menu.Item>
            <Menu.Item>Menu item 3</Menu.Item>
          </HeaderMenu>
        </ChatHeader>
        <ChatMessages />
        <ChatInput>
            <InputMenu>
                <MenuItem>Menu item 1</MenuItem>
                <MenuItem>Menu item 2</MenuItem>
                <MenuItem>Menu item 3</MenuItem>
            </InputMenu>
            <InputTextarea/>
            <InputSend/>
        </ChatInput>

      </>
    )
  }
}