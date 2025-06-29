import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [tsconfigPaths()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'AsasvirtuaisChat',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
        },
        rollupOptions: {
          external: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              '@chakra-ui/react': 'ChakraUI',
              '@emotion/react': 'EmotionReact'
            }
          }
        }
      }
    }
  }

  return {
    plugins: [tsconfigPaths()],
  }
})
