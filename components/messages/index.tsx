import React from 'react'

export interface MessageData {
  id: string
  content: string
  author?: string
  timestamp?: string
  variant?: 'sent' | 'received'
}

export interface MessagesProps {
  messages: MessageData[]
  className?: string
}

export const Messages: React.FC<MessagesProps> = ({ messages, className }) => {
  return (
    <div className={`messages ${className || ''}`}>
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`messages__item messages__item--${message.variant || 'received'}`}
        >
          {message.author && <div className="messages__author">{message.author}</div>}
          <div className="messages__content">{message.content}</div>
          {message.timestamp && <div className="messages__timestamp">{message.timestamp}</div>}
        </div>
      ))}
    </div>
  )
}

export default Messages