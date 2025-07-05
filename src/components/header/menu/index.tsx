import React, { useMemo, useCallback } from "react"
import {
  IconButton,
  Menu,
  Portal,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import { RiSideBarLine } from "react-icons/ri"

interface HeaderMenuProps extends React.PropsWithChildren {
  onToggleFeed?: () => void
}

export function HeaderMenu({ children, onToggleFeed }: HeaderMenuProps) {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const showMobileFeedButton = useMemo(
    () => isMobile && onToggleFeed,
    [isMobile, onToggleFeed]
  )

  const handleToggleFeed = useCallback(() => {
    onToggleFeed?.()
  }, [onToggleFeed])

  return (
    <HStack>
      {/* Feed toggle button - only shown on mobile */}
      {showMobileFeedButton && (
        <IconButton
          aria-label="toggle-feed"
          variant="ghost"
          size="lg"
          onClick={handleToggleFeed}
        >
          <RiSideBarLine />
        </IconButton>
      )}

      <Menu.Root closeOnSelect={false}>
        <Menu.Trigger asChild>
          <IconButton
            aria-label="open-menu"
            fontSize="3xl"
            variant="ghost"
            size="lg"
          >
            ⋮
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>{children}</Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </HStack>
  )
}

export default HeaderMenu
