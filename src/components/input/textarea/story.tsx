import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { InputTextarea } from './index'

const meta: Meta<typeof InputTextarea> = {
  title: 'Components/Input/Textarea',
  component: InputTextarea,
}

export default meta
type Story = StoryObj<typeof meta>

export const Textarea: Story = {
}