
module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: ["@storybook/addon-controls", "@storybook/addon-docs"],
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".js", ".jsx");
    return config;
  }
};
