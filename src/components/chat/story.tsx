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

import { Box, Text } from "@chakra-ui/react"
import { ChatFeedLayout } from "./feed"
import { Feed } from "../feed"
import { FeedHeader } from "../feed/header"
import { FeedItem } from "../feed/item"

export const ChatFeed: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const [showFeed, setShowFeed] = React.useState(false)

    return (
      <ChatFeedLayout
        showFeed={showFeed}
        onToggleFeed={() => setShowFeed(!showFeed)}
        header={
          <ChatHeader>
            <HeaderTitle />
            <HeaderMenu />
          </ChatHeader>
        }
        messages={
          <ChatMessages>
            <ChatMessage avatar="Assistant" username="" date="10:00 AM">
              Welcome to the chat feed layout!
            </ChatMessage>
            <ChatMessage avatar="User" username="" date="10:02 AM">
              This combines chat with a feed sidebar for enhanced interaction.
            </ChatMessage>
            <ChatMessage avatar="Assistant" username="" date="10:05 AM">
              The feed can show related content, notifications, or any
              supplementary information.
            </ChatMessage>
          </ChatMessages>
        }
        input={
          <ChatInput>
            <InputMenu />
            <InputTextarea placeholder="Type a message..." />
            <InputSend />
          </ChatInput>
        }
        feed={
          <Feed header={<FeedHeader title="Activity Feed" />}>
            <FeedItem
              avatar="https://bit.ly/dan-abramov"
              title="New Feature Released"
              subtitle="ChatFeedLayout is now available"
              timestamp="2 hours ago"
              content={
                <Text fontSize="sm">
                  The new 2x2 grid layout combines chat functionality with a
                  dedicated feed area.
                </Text>
              }
            />
            <FeedItem
              title="System Update"
              subtitle="Maintenance scheduled"
              timestamp="5 hours ago"
            />
            <FeedItem
              avatar="https://bit.ly/kent-c-dodds"
              title="Kent C. Dodds"
              subtitle="Shared a new article"
              timestamp="1 day ago"
              content={
                <Box>
                  <Text fontSize="sm" mb={1}>
                    "Building Better React Components"
                  </Text>
                  <Text fontSize="xs" color="fg.muted">
                    A comprehensive guide to component architecture...
                  </Text>
                </Box>
              }
            />
            <FeedItem
              title="Reminder"
              subtitle="Team meeting at 3 PM"
              timestamp="2 days ago"
            />
          </Feed>
        }
      />
    )
  },
}
