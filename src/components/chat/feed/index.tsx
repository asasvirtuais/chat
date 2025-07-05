import React from 'react'
import { Box, CloseButton, Editable, Flex, Grid, GridItem, GridItemProps, Heading, HStack, IconButton, Menu, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { ChatHeader } from '../../header'
import { HeaderTitle } from '../../header/title'
import { HeaderMenu } from '../../header/menu'

export function Main({ children, ...props } : GridItemProps) {
  return (
    <Box h='100%' {...props}>
      {children}
    </Box>
  )
}

export function Feed({ children, ...props } : GridItemProps) {
  return (
    <Box h='100%' {...props}>
      {children}
    </Box>
  )
}

import { RiSideBarLine } from 'react-icons/ri'
import { ChatLayout } from '../../chat'
import ChatMessages from '../../messages'
import ChatInput from '../../input'
import InputTextarea from '../../input/textarea'
import { InputSend } from '../../input/send'
import InputMenu from '../../input/menu'

export function ChatFeedLayout() {
  const { open, onOpen, onClose } = useDisclosure()
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return (
    <Flex h='100dvh' w='100dvw'>
        <Main w={open ? '0px' : '100dvw'} maxW={{base: '100%', md: '66.66%'}} overflow='hidden'>
          <ChatLayout>
            <ChatHeader>
              <HeaderTitle value='My Scenario' />
              <IconButton display={{base: 'block', md: 'none'}} onClick={onOpen} variant='plain'>
                <RiSideBarLine/>
              </IconButton>
              <HeaderMenu>
                <Menu.Item value='settings'>Settings <Menu.ItemCommand>⚙️</Menu.ItemCommand></Menu.Item>
                <Menu.Separator/>
                <Menu.Item value='scenarios'>My Scenarios <Menu.ItemCommand>🎭</Menu.ItemCommand></Menu.Item>
                <Menu.Separator/>
                <Menu.Item value='new-scenario'>New Scenario <Menu.ItemCommand>➕</Menu.ItemCommand></Menu.Item>
                <Menu.Separator/>
                <Menu.Item value='delete-scenario' color='red.500'>Delete Scenario <Menu.ItemCommand>❌</Menu.ItemCommand></Menu.Item>
              </HeaderMenu>
            </ChatHeader>
            <ChatMessages>
              <Editable.Root placeholder='System instructions'>
                <Editable.Preview/>
                <Editable.Textarea/>
              </Editable.Root>
            </ChatMessages>
            <ChatInput>
              <InputMenu>
                <Menu.Item value='attach-image'>Attach Image <Menu.ItemCommand>📎</Menu.ItemCommand></Menu.Item>
                <Menu.Item value='generate'>Generate <Menu.ItemCommand>💬</Menu.ItemCommand></Menu.Item>
              </InputMenu>
              <InputTextarea/>
              <InputSend/>
            </ChatInput>
          </ChatLayout>
        </Main>
        <Feed w={open ? '100dvw' : '0px'} maxW={{base: '100%', md: '33.33%'}} overflow='hidden'>
          <CloseButton m={4} onClick={onClose} />
          <Box p={4}>
            <Heading>Feed</Heading>
          </Box>
        </Feed>
    </Flex>
  )
}

export default ChatFeedLayout
