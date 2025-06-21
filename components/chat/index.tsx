import React from 'react'
import { Grid } from '@chakra-ui/react'
import { Header } from '../header'
import { Messages, MessageData } from '../messages'
import { Input } from '../input'

export interface ChatProps {
  title: string
  messages: MessageData[]
  inputValue?: string
  onTitleChange?: (value: string) => void
  onMenuClick?: () => void
  onInputChange?: (value: string) => void
  onPlusClick?: () => void
  onSendMessage?: (message: string) => void
  className?: string
}

export const Chat: React.FC<ChatProps> = ({
  title,
  messages,
  inputValue = '',
  onTitleChange,
  onMenuClick,
  onInputChange,
  onPlusClick,
  onSendMessage,
  className
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault()
      onSendMessage?.(inputValue.trim())
    }
  }

  return (
    <Grid
      templateRows="auto 1fr auto"
      h="100dvh"
      className={className}
      onKeyPress={handleKeyPress}
    >
      <Header
        title={title}
        onTitleChange={onTitleChange}
        onMenuClick={onMenuClick}
      />
      
      <Messages
        messages={messages}
        // overflowY="auto"
        // p={4}
      />
      
      <Input
        value={inputValue}
        onChange={onInputChange}
        onPlusClick={onPlusClick}
        p={4}
      />
    </Grid>
  )
}

export default Chat