import React from 'react'
import { GridItem, Stack, HStack } from '@chakra-ui/react'

export function ChatInput({ children, ...props }: React.PropsWithChildren<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>) {
  return (
    <GridItem as='footer'>
      <Stack w='full' gap={1} alignItems='flex-end'>
        <HStack w='full' alignItems='flex-end' asChild>
          <form {...props}>
            {children}
          </form>
        </HStack>
      </Stack>
    </GridItem>
  )
}

export default ChatInput