const Store = require('electron-store');

const store = new Store();

let getConfig = () => {
  return store.get('UserConfig') ?? {skipAds: true, alwaysOnTop: false};
};
module.exports = {
  setConfig: (newConfig) => {
    let oldConfig = getConfig();
    store.set('UserConfig', {...oldConfig, ...newConfig});
  },
  getConfig: getConfig,
};

