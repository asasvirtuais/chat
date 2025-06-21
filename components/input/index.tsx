import React from 'react'
import { HStack, IconButton, Textarea } from '@chakra-ui/react'
import { Plus } from 'lucide-react'

export interface InputProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  onPlusClick?: () => void
  className?: string
}

export const Input: React.FC<InputProps> = ({ 
  value, 
  onChange, 
  placeholder = 'Type a message...', 
  disabled = false,
  onPlusClick,
  className
}) => {
  return (
    <HStack gap={2} className={className}>
      <IconButton
        aria-label="Add attachment"
        size="sm"
        variant="ghost"
        onClick={onPlusClick}
        disabled={disabled}
      ><Plus /></IconButton>
      <Textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        resize="none"
        minH="40px"
        maxH="200px"
        flex={1}
      />
    </HStack>
  )
}

export default Input