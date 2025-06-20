import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './index';

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Hello, this is a message!',
  },
};

export const Sent: Story = {
  args: {
    content: 'This is a sent message',
    variant: 'sent',
    author: 'You',
    timestamp: '10:30 AM',
  },
};

export const Received: Story = {
  args: {
    content: 'This is a received message',
    variant: 'received',
    author: 'John Doe',
    timestamp: '10:32 AM',
  },
};

export const WithoutAuthor: Story = {
  args: {
    content: 'Message without author',
    timestamp: '10:35 AM',
  },
};