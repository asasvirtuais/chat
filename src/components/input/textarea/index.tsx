import React from 'react'
import { Textarea, TextareaProps } from '@chakra-ui/react'

export function InputTextarea(props: TextareaProps) {

  return (
    <Textarea
      rows={1}
      autoFocus
      variant='flushed'
      size='lg'
      placeholder='Type a message...'
      // @ts-expect-error odd
      autoresize
      {...props}
    />
  )
}

export default InputTextarea