import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChatLayout } from "./index"
import { Code, Menu, MenuItem } from "@chakra-ui/react"
import ChatHeader from "../header"
import HeaderMenu from "../header/menu"
import HeaderTitle from "../header/title"
import ChatInput from "../input"
import InputMenu from "../input/menu"
import { InputSend } from "../input/send"
import InputTextarea from "../input/textarea"
import ChatMessages from "../messages"
import ChatMessage from "../message"

const meta: Meta<typeof ChatLayout> = {
  title: "Components/Chat",
  component: ChatLayout,
}

export default meta
type Story = StoryObj<typeof meta>

export const Chat: Story = {
  args: {
    children: (
      <>
        <ChatHeader>
          <HeaderTitle value="Chat Title" />
          <HeaderMenu>
            <Menu.Item>Menu item 1</Menu.Item>
            <Menu.Item>Menu item 2</Menu.Item>
            <Menu.Item>Menu item 3</Menu.Item>
          </HeaderMenu>
        </ChatHeader>
        <ChatMessages>
          <ChatMessage
            avatar=""
            username="user"
            menu={
              <Menu.Root>
                <MenuItem>Menu item 1</MenuItem>
                <MenuItem>Menu item 2</MenuItem>
                <MenuItem>Menu item 3</MenuItem>
              </Menu.Root>
            }
            info={
              <Code>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti distinctio vel vero, atque fuga nihil voluptas vitae
                obcaecati dignissimos, nostrum omnis veniam dolorem? Incidunt
                itaque eos possimus dolorem totam?
              </Code>
            }
          >
            ### Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate corporis nisi saepe pariatur, error fuga aperiam.
            Dignissimos harum consectetur et quam facere pariatur quos ea
            voluptatum laudantium omnis voluptatem rerum quibusdam odio sequi
            voluptates, quisquam inventore earum!
          </ChatMessage>
        </ChatMessages>
        <ChatInput>
          <InputMenu>
            <MenuItem>Menu item 1</MenuItem>
            <MenuItem>Menu item 2</MenuItem>
            <MenuItem>Menu item 3</MenuItem>
          </InputMenu>
          <InputTextarea />
          <InputSend />
        </ChatInput>
      </>
    ),
  },
}
