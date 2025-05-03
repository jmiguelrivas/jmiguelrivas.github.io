import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'html'],
    outputFile: {
      html: './vitest/index.html', // Optional: specify the output file path
    },
  },
});
