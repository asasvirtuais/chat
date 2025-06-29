import React from 'react'
import { SimpleGrid, Center } from '@chakra-ui/react'

export function ChatLayout({ children }: React.PropsWithChildren) {

    return (
        <Center h='100dvh' w='100%'>
            <SimpleGrid gridTemplateRows='auto 1fr auto' h='100dvh' w='100%' p={2} maxW='xl' mx='auto'>
                {children}
            </SimpleGrid>
        </Center>
    )
}

export default ChatLayout