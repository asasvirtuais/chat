import React from 'react'
import { GridItem, Stack, HStack } from '@chakra-ui/react'

export function ChatInput({ children }: React.PropsWithChildren) {
  return (
    <GridItem as='footer'>
      <Stack w='full' gap={1} alignItems='flex-end'>
        <HStack w='full' alignItems='flex-end'>
          {children}
        </HStack>
      </Stack>
    </GridItem>
  )
}

export default ChatInput