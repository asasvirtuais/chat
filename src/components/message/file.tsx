import { Box, Collapsible, Image, Clipboard, IconButton, Portal, Link } from '@chakra-ui/react'
import React from 'react'
import Markdown from 'react-markdown'
import { FiImage, FiVideo, FiMusic, FiFileText, FiFile, FiPaperclip } from 'react-icons/fi'

interface MessageFileProps {
  file: {
    name: string
    type: string
    url?: string
    content?: string
  }
  container: React.RefObject<HTMLDivElement|null>
}

export const MessageFile = ({ container, file }: MessageFileProps) => {

  return (
    <Collapsible.Root>
      {/* @ts-expect-error typescript issue */}
      <Collapsible.Trigger asChild>
        <Box 
          display="flex" 
          alignItems="center" 
          gap={2} 
          cursor="pointer"
          p={2}
          borderRadius="md"
          _hover={{ backgroundColor: 'gray.100' }}
        >
          <Box fontSize="lg" color="gray.600">
            {file.type.startsWith('image/') && <FiImage />}
            {file.type.startsWith('video/') && <FiVideo />}
            {file.type.startsWith('audio/') && <FiMusic />}
            {file.type.startsWith('text/') &&  <FiFile />}
            {
              ! file.type.startsWith('image/') &&
              ! file.type.startsWith('video/') &&
              ! file.type.startsWith('audio/') &&
              ! file.type.startsWith('text/') &&
              ! file.name.endsWith('.md') &&
              <FiPaperclip />
            }
          </Box>
          <Box fontSize="sm" fontWeight="medium">{file.name}</Box>
        </Box>
      </Collapsible.Trigger>
      
      <Portal container={container}>
        <Collapsible.Content>
          <Box p={3} borderLeft="2px solid" borderColor="gray.200">
            {file.type.startsWith('video/') && <video style={{width: '100%'}} src={file.url} controls />}
            {file.type.startsWith('audio/') && <audio style={{width: '100%'}} src={file.url} controls />}
            {file.type.startsWith('image/') && (<Image src={file.url} alt={file.name} style={{ maxWidth: '100%' }} />)}
            {file.type === 'text/markdown' || file.name.endsWith('.md') && (
              <Box position="relative">
                <Box position="absolute" top={2} right={2}>
                  <Clipboard.Root value={file.content || ''}>
                    {/* @ts-expect-error typescript bug */}
                    <Clipboard.Trigger asChild>
                      <IconButton variant="surface" size="xs">
                        <Clipboard.Indicator />
                      </IconButton>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </Box>
                <Markdown>{file.content || ''}</Markdown>
              </Box>
            )}
            {file.type.startsWith('text/') && ! file.name.endsWith('.md') && (
              <Box position="relative">
                <Box position="absolute" top={2} right={2}>
                  <Clipboard.Root value={file.content || ''}>
                    {/* @ts-expect-error typescript bug */}
                    <Clipboard.Trigger asChild>
                      <IconButton variant="surface" size="xs">
                        <Clipboard.Indicator />
                      </IconButton>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </Box>
                <pre style={{ whiteSpace: 'pre-wrap' }}>{file.content}</pre>
              </Box>
            )}
            <Link
              href={file.url} 
              download={file.name}
              display='inline-block'
              padding='8px 16px'
              backgroundColor='#007bff'
              color='white'
              textDecoration='none'
              borderRadius='4px'
              mt={4}
            >
              Download {file.name}
            </Link>
          </Box>
        </Collapsible.Content>
      </Portal>
    </Collapsible.Root>
  )
}

export default MessageFile