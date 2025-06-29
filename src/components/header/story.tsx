import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem } from '@chakra-ui/react'
import { ChatHeader } from './index'
import HeaderTitle from './title'
import HeaderMenu from './menu'

const meta: Meta<typeof ChatHeader> = {
  title: 'Components/Header',
  component: ChatHeader,
  parameters: {
    layout: 'centered',
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: (
      <>
        <HeaderTitle value='Chat Title' />
        <HeaderMenu>
          <MenuItem>Menu item 1</MenuItem>
          <MenuItem>Menu item 2</MenuItem>
          <MenuItem>Menu item 3</MenuItem>
        </HeaderMenu>
      </>
    )
  }
}