define('ember-todo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-todo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberTodoConfigEnvironment) {
  var _config$APP = _emberTodoConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});