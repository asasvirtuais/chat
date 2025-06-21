import React from 'react'

export interface MessageProps {
  content: string
  author?: string
  timestamp?: string
  className?: string
  variant?: 'sent' | 'received'
}

export const Message: React.FC<MessageProps> = ({ 
  content, 
  author, 
  timestamp, 
  className, 
  variant = 'received' 
}) => {
  return (
    <div className={`message message--${variant} ${className || ''}`}>
      {author && <div className="message__author">{author}</div>}
      <div className="message__content">{content}</div>
      {timestamp && <div className="message__timestamp">{timestamp}</div>}
    </div>
  )
}

export default Message