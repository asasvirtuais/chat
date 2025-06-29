import React from 'react'
import { Icon, IconButton, Menu, Portal, Stack } from '@chakra-ui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'

export function InputMenu( { children } : React.PropsWithChildren ) {

    return (
        <Menu.Root closeOnSelect={false}>
            {/* @ts-expect-error dunno */}
            <Menu.Trigger asChild>
              <IconButton
                aria-label='Open menu'
                size='md'
                variant='plain'
              >
                <Icon size='xl' asChild>
                  <BsFillPlusCircleFill />
                </Icon>
              </IconButton>

            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                      <Stack>
                          {children}
                      </Stack>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default InputMenu