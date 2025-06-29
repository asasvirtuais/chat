import { Avatar, Box, Collapsible, HStack, Separator, Spinner, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { MessageMenu } from './menu'
import { Prose } from '../ui/prose'
import Markdown from 'react-markdown'
import { MessageFile } from './file'

export const ChatMessage = ({ 
  children,
  date,
  info,
  reverse,
  markdown = true,
  avatar,
  menu,
  files,
  loading,
  username,
}: {
  children: string,
  info?: React.ReactNode,
  date?: string,
  reverse?: boolean
  markdown?: boolean
  avatar?: string
  menu?: React.ReactNode
  files?: File[]
  loading?: boolean
  username: string
}) => {
  const collapsible = useDisclosure()
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <>
      <Box ref={ref}></Box>
      <Box position='relative'>
        {avatar && (
          <Avatar.Root w='90px' h='120px' size='2xl' float={reverse ? 'right' : 'left'} rounded='none' ml={reverse ? 4 : 0} mr={reverse ? 0 : 4}>
            <Avatar.Fallback name={username} />
            {/* @ts-ignore dunno */}
            <Avatar.Image src={avatar} />
          </Avatar.Root>
        )}
        <Box fontSize='xs' w='full' textAlign={reverse ? 'left' : 'right'}>
          <Box display='flex' cursor='pointer' justifyContent='space-between'>
            <Box display='inline-flex'><b>{username}</b></Box>
            {loading ? (
              <Spinner display='inline-flex' />
            ) : (
              <Box display='inline-flex' onClick={collapsible.onToggle}>{date}{' '}{info && <>🛈</>}</Box>
            )}
          </Box>
        </Box>
        <MessageMenu items={menu}>
          <Prose fontSize='sm' textAlign='justify'>
            {markdown ? (
              <Markdown>{children}</Markdown>
            ) : children}
          </Prose>
        </MessageMenu>
        <HStack>
          {files?.map(file => (
            <MessageFile container={ref} file={file} />
          ))}
        </HStack>
      </Box>
      {info && collapsible.open && (
        <Collapsible.Root open={collapsible.open} onClose={collapsible.onClose}>
          <Collapsible.Content>{info}</Collapsible.Content>
        </Collapsible.Root>
      )}
      <Separator/>
    </>
  )
}

export default ChatMessage
