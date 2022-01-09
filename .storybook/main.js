const path = require('path');
module.exports = {
  stories: ['../**/*.story.tsx', '../**/*.story.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  presets: [path.resolve(__dirname, './next-preset.js')],
  staticDirs: ['../public'],
};
