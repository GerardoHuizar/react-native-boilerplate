const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: "~/",
  rootPathSuffix: "./src",
};

module.exports = (api) => {
  api.cache(true);

  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [["babel-plugin-root-import", rootImportOpts]],
  };
};
