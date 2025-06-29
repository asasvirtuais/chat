import React from 'react'
import { GridItem, HStack } from '@chakra-ui/react'

interface ChatHeaderProps extends React.PropsWithChildren {
  onToggleFeed?: () => void
}

export function ChatHeader( { children, onToggleFeed } : ChatHeaderProps ) {
  return (
    <GridItem as='header'>
        <HStack w='full' justifyContent='space-between'>
            {React.Children.map(children, (child, index) => {
              // Pass onToggleFeed to HeaderMenu (last child)
              if (index === React.Children.count(children) - 1 && React.isValidElement(child)) {
                return React.cloneElement(child, { onToggleFeed } as any)
              }
              return child
            })}
        </HStack>
    </GridItem>
  )
}

export default ChatHeader