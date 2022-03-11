module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // 启用polyfill
        corejs: 3,
      },
    ],
    "@babel/preset-react",
  ],
};
