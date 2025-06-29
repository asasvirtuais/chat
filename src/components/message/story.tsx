import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChatMessage } from './index'
import ChatMessages from '../messages'
const meta: Meta<typeof ChatMessage> = {
  title: 'Components/Message',
  component: ChatMessage,
  decorators: [
    Story => (
      <ChatMessages>
        <Story/>
      </ChatMessages>
    )
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const Message: Story = {
  args: {
    username: 'Claude',
    children: 'Hello! Here are some files I can help you with:',
    date: '2:30 PM',
    avatar: 'https://via.placeholder.com/40',
    files: [
      Object.assign(new File(['# Hello World\n\nThis is a **markdown** file with some content.'], 'example.md', { type: 'text/markdown' }), {
        url: 'https://example.com/files/example.md',
        content: '# Hello World\n\nThis is a **markdown** file with some content.'
      }),
      Object.assign(new File(['console.log("Hello World");'], 'script.js', { type: 'text/javascript' }), {
        url: 'https://example.com/files/script.js',
        content: 'console.log("Hello World");'
      }),
      Object.assign(new File([''], 'image.jpg', { type: 'image/jpeg' }), {
        url: 'https://placehold.co/600x400/EEE/31343C'
      }),
      Object.assign(new File([''], 'video.mp4', { type: 'video/mp4' }), {
        url: 'https://www.w3schools.com/html/mov_bbb.mp4'
      }),
      Object.assign(new File([''], 'audio.mp3', { type: 'audio/mpeg' }), {
        url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
      }),
      Object.assign(new File([''], 'document.pdf', { type: 'application/pdf' }), {
        url: 'https://example.com/files/document.pdf'
      })
    ]
  }
}
