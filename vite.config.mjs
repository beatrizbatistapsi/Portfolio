import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const pages = [
  'index.html',
  'about.html',
  'contact.html',
  'resources.html',
  'services.html',
  'variants.html',
  'variant1.html',
  'variant2.html',
  'variant3.html',
  'variant4.html',
  'variant5.html',
]

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((file) => [file.replace('.html', ''), resolve(__dirname, file)]),
      ),
    },
  },
})
