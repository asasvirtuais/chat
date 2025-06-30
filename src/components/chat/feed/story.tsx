import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChatFeedLayout } from "../feed"

const meta: Meta<typeof ChatFeedLayout> = {
  title: "Components/Chat",
  component: ChatFeedLayout,
}

export default meta
type Story = StoryObj<typeof meta>


export const ChatFeed: Story = {
  parameters: {
    layout: "fullscreen",
  }
}
