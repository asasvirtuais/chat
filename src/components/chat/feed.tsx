import React, { ReactNode, useState, useMemo, useCallback } from "react"
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"

interface ChatFeedLayoutProps {
  header: ReactNode
  messages: ReactNode
  input: ReactNode
  feed: ReactNode
  showFeed?: boolean
  onToggleFeed?: () => void
}

/**
 * ChatFeedLayout - A responsive 2x2 grid layout combining chat interface with feed
 *
 * Grid structure:
 * - Desktop: First column (2fr) for chat, Second column (1fr) for feed
 * - Mobile: Feed hidden by default, toggleable to full screen
 */
export function ChatFeedLayout({
  header,
  messages,
  input,
  feed,
  showFeed: externalShowFeed,
  onToggleFeed,
}: ChatFeedLayoutProps) {
  const [internalShowFeed, setInternalShowFeed] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })
  
  // Use external control if provided, otherwise use internal state
  const showFeed = useMemo(() => 
    externalShowFeed !== undefined ? externalShowFeed : internalShowFeed,
    [externalShowFeed, internalShowFeed]
  )

  const toggleFeed = useCallback(() => {
    if (onToggleFeed) {
      onToggleFeed()
    } else {
      setInternalShowFeed(prev => !prev)
    }
  }, [onToggleFeed])

  // Column widths for responsive behavior
  const { chatColumnWidth, feedColumnWidth } = useMemo(() => ({
    chatColumnWidth: isMobile && showFeed ? "0" : "2fr",
    feedColumnWidth: isMobile && !showFeed ? "0" : "1fr"
  }), [isMobile, showFeed])

  // Grid template columns
  const templateColumns = useMemo(() => ({
    base: "1fr",
    md: `${chatColumnWidth} ${feedColumnWidth}`
  }), [chatColumnWidth, feedColumnWidth])

  // Chat display styles
  const chatDisplayStyles = useMemo(() => ({
    base: isMobile && showFeed ? "none" : "flex",
    md: "flex"
  }), [isMobile, showFeed])

  // Feed display styles
  const feedDisplayStyles = useMemo(() => ({
    base: isMobile && !showFeed ? "none" : "block",
    md: "block"
  }), [isMobile, showFeed])

  // Feed width styles
  const feedWidthStyles = useMemo(() => ({
    base: isMobile && showFeed ? "100vw" : "auto",
    md: "auto"
  }), [isMobile, showFeed])

  // Enhanced header with toggle functionality
  const enhancedHeader = useMemo(() =>
    React.cloneElement(header as React.ReactElement, { onToggleFeed: toggleFeed }),
    [header, toggleFeed]
  )

  // Enhanced feed with close functionality
  const enhancedFeed = useMemo(() =>
    React.cloneElement(feed as React.ReactElement, { 
      onClose: isMobile ? toggleFeed : undefined 
    }),
    [feed, isMobile, toggleFeed]
  )

  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="1fr auto"
      templateColumns={templateColumns}
      gap={2}
      p={2}
    >
      {/* Chat Header and Messages - Top Left */}
      <GridItem
        rowSpan={1}
        colSpan={1}
        display={chatDisplayStyles}
        flexDirection="column"
        overflow="hidden"
      >
        {/* Header */}
        <Box flexShrink={0}>
          {enhancedHeader}
        </Box>

        {/* Messages */}
        <Box flex="1" overflow="hidden">
          {messages}
        </Box>
      </GridItem>

      {/* Feed - Right Side (spans both rows) */}
      <GridItem
        rowSpan={2}
        borderLeftWidth={{ base: "0", md: "1px" }}
        borderColor="border"
        overflow="hidden"
        display={feedDisplayStyles}
        width={feedWidthStyles}
      >
        {enhancedFeed}
      </GridItem>

      {/* Chat Input - Bottom Left */}
      <GridItem 
        rowSpan={1} 
        colSpan={1}
        display={chatDisplayStyles}
      >
        {input}
      </GridItem>
    </Grid>
  )
}

export default ChatFeedLayout
