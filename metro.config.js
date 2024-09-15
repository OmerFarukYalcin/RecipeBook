const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const nodeLibs = require('node-libs-react-native');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: nodeLibs,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
