/** @type { import('@storybook/web-components-vite').StorybookConfig } */
import { loadEnv } from 'vite';

const config = {
  stories: [
    "../storybook_dev/**/*.mdx",
    "../storybook_dev/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {}
  },
  viteFinal: (config, { mode }) => {
    // Load env vars, but only keep those safe to expose
    const env = loadEnv(mode, process.cwd(), 'STORYBOOK_'); // or 'VITE_'

    config.define = {
      ...Object.entries(env).reduce((acc, [key, val]) => {
        acc[`process.env.${key}`] = JSON.stringify(val);
        return acc;
      }, {})
    };

    return config;
  }
};

export default config;
