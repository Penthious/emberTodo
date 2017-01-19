define('ember-todo/app', ['exports', 'ember', 'ember-todo/resolver', 'ember-load-initializers', 'ember-todo/config/environment'], function (exports, _ember, _emberTodoResolver, _emberLoadInitializers, _emberTodoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberTodoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberTodoConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberTodoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberTodoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});