import React from 'react'
import type { Preview } from '@storybook/react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview