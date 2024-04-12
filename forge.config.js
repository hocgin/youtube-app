const {parsed} = require("dotenv").config();
module.exports = {
  packagerConfig: {
    name: "YouTube",
    executableName: "YouTube",
    icon: "images/icon",
    appBundleId: "com.hocgin.youtube-app",
    extendInfo: {
      LSUIElement: "true",
    },
    // osxSign: {
    //   hardenedRuntime: false,
    //   gatekeeperAssess: false,
    //   identity: "Developer ID Application: ",
    // },
    // osxNotarize: {
    //   appBundleId: "com.hocgin.kimi-app",
    //
    //   tool: "notarytool",
    //   appleId: parsed.APPLE_ID,
    //   appleIdPassword: parsed.APPLE_PASSWORD,
    //   teamId: parsed.APPLE_TEAM_ID,
    // },
  },
  publishers: [{
    name: "@electron-forge/publisher-github",
    config: {
      repository: {
        owner: "hocgin",
        name: "youtube-app",
      },
      prerelease: true,
    },
  },],

  rebuildConfig: {},
  makers: [{
    name: "@electron-forge/maker-squirrel", config: {},
  }, {
    name: "@electron-forge/maker-dmg", platforms: ["darwin"], config: {},
  }, {
    name: "@electron-forge/maker-deb", config: {},
  }, {
    name: "@electron-forge/maker-rpm", config: {},
  },],
};
