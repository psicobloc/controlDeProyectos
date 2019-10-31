cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebase-lib.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebase-lib/www/firebase.js",
      "pluginId": "cordova-plugin-firebase-lib",
      "clobbers": [
        "FirebasePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-firebase-lib": "5.1.1",
    "cordova-android-play-services-gradle-release": "4.0.0",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0"
  };
});