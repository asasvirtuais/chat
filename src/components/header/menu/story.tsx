import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { HeaderMenu } from './index'
import { MenuItem } from '@chakra-ui/react'

const meta: Meta<typeof HeaderMenu> = {
  title: 'Components/Header/Menu',
  component: HeaderMenu,
  parameters: {
    layout: 'centered',
  }
}

export default meta

type Story = StoryObj<typeof meta>
export const Menu: Story = {
  args: {
    children: (
      <>
        <MenuItem>Menu item 1</MenuItem>
        <MenuItem>Menu item 2</MenuItem>
        <MenuItem>Menu item 3</MenuItem>
        <MenuItem>Menu item 4</MenuItem>
      </>
    )
  }
}
