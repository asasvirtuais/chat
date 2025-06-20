import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onPlusClick: { action: 'plus clicked' },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type a message...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a sample message that I am typing in the chat input.',
    placeholder: 'Type a message...',
  },
};

export const Disabled: Story = {
  args: {
    value: 'This input is disabled',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    value: 'This is a very long message that demonstrates how the textarea expands to accommodate more text content while maintaining the plus button on the left side.',
  },
};