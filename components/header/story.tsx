import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onTitleChange: { action: 'title changed' },
    onMenuClick: { action: 'menu clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Chat with AI Assistant',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long chat title that might wrap or truncate',
  },
};

export const EmptyTitle: Story = {
  args: {
    title: '',
  },
};