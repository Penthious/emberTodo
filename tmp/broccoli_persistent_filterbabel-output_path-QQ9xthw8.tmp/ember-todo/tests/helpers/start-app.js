define('ember-todo/tests/helpers/start-app', ['exports', 'ember', 'ember-todo/app', 'ember-todo/config/environment'], function (exports, _ember, _emberTodoApp, _emberTodoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberTodoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberTodoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});