import React from 'react'
import { GridItem, HStack } from '@chakra-ui/react'

export function ChatHeader( { children } : React.PropsWithChildren ) {
  return (
    <GridItem as='header'>
        <HStack w='full' justifyContent='space-between'>
            {children}
        </HStack>
    </GridItem>
  )
}

export default ChatHeader