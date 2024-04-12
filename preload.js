const {contextBridge, ipcRenderer} = require('electron/renderer');
let storage = require('./storage.js');

contextBridge.exposeInMainWorld('electronAPI', {
  getConfig: () => storage.getConfig(),
  onUpdateConfig: (callback) => ipcRenderer.on('update-config', (_event, value) => callback(value)),
});
