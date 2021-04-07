// import injectDevServer from '@cypress/react/plugins/react-scripts';

// // eslint-disable-next-line import/no-anonymous-default-export
// export default function (on, config): Cypress.PluginConfig {
//   injectDevServer(on, config);
//   return config;
// }

const injectDevServer = require('@cypress/react/plugins/react-scripts');

module.exports = (on, config) => {
  injectDevServer(on, config);
  return config;
};
