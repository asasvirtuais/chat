import React from 'react'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'

export interface HeaderTitleProps {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  fontSize?: string
  fontWeight?: string
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ 
  value,
  onChange,
  placeholder = 'Enter title...',
  className,
  fontSize = 'xl',
  fontWeight = 'bold'
}) => {
  return (
    <Editable.Root
      value={value}
      // onChange={onChange}
      placeholder={placeholder}
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      <EditablePreview />
      <EditableInput />
    </Editable.Root>
  )
}

export default HeaderTitle