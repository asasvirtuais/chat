import React from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

export function InputSend(props: IconButtonProps) {
    return (
        <IconButton
        type='submit'
        aria-label='Send message'
        fontSize='2xl'
        variant='ghost'
        size='md'
        {...props}
        >➤</IconButton>
    )
}