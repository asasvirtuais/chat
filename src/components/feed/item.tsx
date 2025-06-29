"use client"

import React, { ReactNode } from "react"
import { Box, HStack, VStack, Text, Avatar } from "@chakra-ui/react"

interface FeedItemProps {
  avatar?: string
  title: string
  subtitle?: string
  timestamp?: string
  content?: ReactNode
  onClick?: () => void
}

/**
 * FeedItem - Individual item in the feed
 */
export function FeedItem({
  avatar,
  title,
  subtitle,
  timestamp,
  content,
  onClick,
}: FeedItemProps) {
  return (
    <Box
      p={4}
      cursor={onClick ? "pointer" : "default"}
      _hover={onClick ? { bg: "bg.subtle" } : undefined}
      onClick={onClick}
      transition="background 0.2s"
    >
      <HStack align="start" gap={3}>
        {avatar && <Avatar.Root size="sm" src={avatar} name={title} />}

        <VStack align="start" flex="1" gap={1}>
          <HStack justify="space-between" w="full">
            <Text fontWeight="semibold" fontSize="sm">
              {title}
            </Text>
            {timestamp && (
              <Text fontSize="xs" color="fg.muted">
                {timestamp}
              </Text>
            )}
          </HStack>

          {subtitle && (
            <Text fontSize="sm" color="fg.muted">
              {subtitle}
            </Text>
          )}

          {content && <Box pt={1}>{content}</Box>}
        </VStack>
      </HStack>
    </Box>
  )
}

export default FeedItem
