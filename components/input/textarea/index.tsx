import React from 'react'
import { Textarea as ChakraTextarea } from '@chakra-ui/react'

export interface TextareaProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  minH?: string
  maxH?: string
  maxLength?: number
}

export const Textarea: React.FC<TextareaProps> = ({ 
  value, 
  onChange, 
  placeholder = 'Enter text...', 
  className, 
  disabled = false,
  minH = '100px',
  maxH = '300px',
  maxLength
}) => {
  return (
    <ChakraTextarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      minH={minH}
      maxH={maxH}
      maxLength={maxLength}
      resize="vertical"
    />
  )
}

export default Textarea