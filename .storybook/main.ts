import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/story.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite"
}

export default config