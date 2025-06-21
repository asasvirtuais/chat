import React from 'react'
import { SimpleGrid, GridItem, HStack, Stack, Center, Menu } from '@chakra-ui/react'
import ChatHeader from '../header'
import HeaderTitle from '../header/title'
import HeaderMenu from '../header/menu'

function InputArea( { children } : React.PropsWithChildren ) {

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

// TODO: finish the default layout
export function ChatLayout() {

    return (
        <Center h='100dvh' w='100%'>
            <SimpleGrid gridTemplateRows='auto 1fr auto' h='100dvh' w='100%' p={2} maxW='xl' mx='auto'>
                <ChatHeader>
                  <HeaderTitle defaultValue='Chat Title'/>
                  <HeaderMenu>
                    <Menu.Item>Menu item 1</Menu.Item>
                    <Menu.Item>Menu item 2</Menu.Item>
                    <Menu.Item>Menu item 3</Menu.Item>
                  </HeaderMenu>
                </ChatHeader>
                {/* <Messages /> */}
                {/* <ChatInput /> */}
            </SimpleGrid>
        </Center>
    )
}

export default ChatLayout