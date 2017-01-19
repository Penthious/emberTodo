define('ember-todo/helpers/app-version', ['exports', 'ember', 'ember-todo/config/environment'], function (exports, _ember, _emberTodoConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _emberTodoConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});