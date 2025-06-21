import React from 'react'
import { Flex, GridItem } from '@chakra-ui/react'

export function ChatMessages( { children }: React.PropsWithChildren ) {
  return (
    <GridItem as='main' display='block' overflowY='auto'>
      <Flex
          h='full'
          flexDirection='column-reverse'
          overflowY='auto'
          w='full'
          style={{ direction: 'ltr' }}
          >
          {children}
      </Flex>
    </GridItem>
  )
}

export default ChatMessages