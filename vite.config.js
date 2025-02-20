import { defineConfig } from 'vite'

export default defineConfig({
  base: '/my-vite-project/', // Это должно быть названием репозитория на GitHub
  build: {
    outDir: 'dist', // Папка, куда собираются файлы
  },
})
