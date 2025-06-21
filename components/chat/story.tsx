import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Chat } from './index'

const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onTitleChange: { action: 'title changed' },
    onMenuClick: { action: 'menu clicked' },
    onInputChange: { action: 'input changed' },
    onPlusClick: { action: 'plus clicked' },
    onSendMessage: { action: 'message sent' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleMessages = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    author: 'AI Assistant',
    timestamp: '10:30 AM',
    variant: 'received' as const,
  },
  {
    id: '2',
    content: 'I need help with my React project. Can you explain how to use state management?',
    author: 'You',
    timestamp: '10:31 AM',
    variant: 'sent' as const,
  },
  {
    id: '3',
    content: 'Of course! State management in React can be handled in several ways. For simple components, you can use the built-in useState hook. For more complex applications, you might want to consider using Context API, Redux, or Zustand.',
    author: 'AI Assistant',
    timestamp: '10:32 AM',
    variant: 'received' as const,
  },
  {
    id: '4',
    content: 'That\'s really helpful! Can you show me an example of useState?',
    author: 'You',
    timestamp: '10:33 AM',
    variant: 'sent' as const,
  },
  {
    id: '5',
    content: 'Absolutely! Here\'s a simple example:\n\n```jsx\nconst [count, setCount] = useState(0)\n\nreturn (\n  <button onClick={() => setCount(count + 1)}>\n    Count: {count}\n  </button>\n)\n```',
    author: 'AI Assistant',
    timestamp: '10:34 AM',
    variant: 'received' as const,
  },
]

export const Default: Story = {
  args: {
    title: 'Chat with AI Assistant',
    messages: sampleMessages,
    inputValue: '',
  },
}

export const EmptyChat: Story = {
  args: {
    title: 'New Chat',
    messages: [],
    inputValue: '',
  },
}

export const WithTypedMessage: Story = {
  args: {
    title: 'Active Chat',
    messages: sampleMessages,
    inputValue: 'Thanks! This is very helpful.',
  },
}

export const LongTitle: Story = {
  args: {
    title: 'This is a very long chat title that demonstrates how the header handles longer text content',
    messages: sampleMessages.slice(0, 2),
    inputValue: '',
  },
}