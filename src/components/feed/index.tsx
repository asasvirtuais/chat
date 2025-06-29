"use client"

import React, { ReactNode } from "react"
import { Box, Stack } from "@chakra-ui/react"

interface FeedProps {
  children: ReactNode
  header?: ReactNode
  onClose?: () => void
}

/**
 * Feed component - A scrollable container for feed items with optional header
 */
export function Feed({ children, header, onClose }: FeedProps) {
  return (
    <Box h="100%" display="flex" flexDirection="column" bg="bg.subtle">
      {header && (
        <Box flexShrink={0}>
          {React.isValidElement(header) 
            ? React.cloneElement(header, { onClose } as any)
            : header
          }
        </Box>
      )}
      <Box flex="1" overflowY="auto">
        <Stack
          gap={0}
          separator={<Box borderBottomWidth="1px" borderColor="border" />}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  )
}

export default Feed
