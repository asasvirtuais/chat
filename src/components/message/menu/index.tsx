import React from 'react'
import { Button, Input, Popover, Portal, Text } from "@chakra-ui/react"

export function MessageMenu({ children, items }: React.PropsWithChildren<{items: React.ReactNode}>) {
  return (
    <Popover.Root>
      {/* @ts-expect-error dunno */}
      <Popover.Trigger asChild>
        {children}
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body overflow='auto'>
              {items}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

export default MessageMenu

