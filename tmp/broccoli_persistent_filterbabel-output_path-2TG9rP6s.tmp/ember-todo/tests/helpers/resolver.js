define('ember-todo/tests/helpers/resolver', ['exports', 'ember-todo/resolver', 'ember-todo/config/environment'], function (exports, _emberTodoResolver, _emberTodoConfigEnvironment) {

  var resolver = _emberTodoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberTodoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberTodoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});