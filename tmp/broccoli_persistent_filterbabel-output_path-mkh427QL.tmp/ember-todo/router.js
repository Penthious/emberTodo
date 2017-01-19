define('ember-todo/router', ['exports', 'ember', 'ember-todo/config/environment'], function (exports, _ember, _emberTodoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberTodoConfigEnvironment['default'].locationType,
    rootURL: _emberTodoConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('tasks', function () {
      this.route('new');
    });
  });

  exports['default'] = Router;
});