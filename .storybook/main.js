module.exports = {
  stories: ["../src/stories/**/*.stories.mdx"],
  addons: [
    { name: "@storybook/preset-create-react-app" },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};
