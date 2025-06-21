import React from 'react'
import { SimpleGrid, GridItem, HStack, Stack, Center, Menu, MenuItem } from '@chakra-ui/react'
import ChatHeader from '../header'
import HeaderTitle from '../header/title'
import HeaderMenu from '../header/menu'
import ChatInput from '../input'
import InputMenu from '../input/menu'
import { InputSend } from '../input/send'
import InputTextarea from '../input/textarea'
import ChatMessages from '../messages'

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