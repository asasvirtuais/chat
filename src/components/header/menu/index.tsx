import React from 'react'
import { IconButton, Menu, Portal } from '@chakra-ui/react'

export function HeaderMenu({ children }: React.PropsWithChildren) {
    return (
        <Menu.Root closeOnSelect={false}>
            <Menu.Trigger>
              <IconButton
                aria-label='open-menu'
                fontSize='3xl'
                variant='ghost'
                size='lg'
              >⋮</IconButton>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {children}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default HeaderMenu