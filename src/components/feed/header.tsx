"use client"

import { Box, HStack, Text, IconButton, useBreakpointValue } from "@chakra-ui/react"
import React, { ReactNode, useMemo, useCallback } from "react"
import { RiCloseLine } from "react-icons/ri"

interface FeedHeaderProps {
  title?: string
  children?: ReactNode
  onClose?: () => void
}

/**
 * FeedHeader - Simple header for the feed section with mobile close button
 */
export function FeedHeader({
  title = "Feed",
  children,
  onClose,
}: FeedHeaderProps) {
  const isMobile = useBreakpointValue({ base: true, md: false })
  
  const showCloseButton = useMemo(() => 
    isMobile && onClose,
    [isMobile, onClose]
  )

  const handleClose = useCallback(() => {
    onClose?.()
  }, [onClose])
  
  return (
    <Box p={4} borderBottomWidth="1px" borderColor="border" bg="bg.surface">
      <HStack justify="space-between">
        <Text fontWeight="semibold">{title}</Text>
        <HStack>
          {children && <Box>{children}</Box>}
          {showCloseButton && (
            <IconButton
              aria-label="Close feed"
              variant="ghost"
              size="sm"
              onClick={handleClose}
            >
              <RiCloseLine />
            </IconButton>
          )}
        </HStack>
      </HStack>
    </Box>
  )
}

export default FeedHeader
