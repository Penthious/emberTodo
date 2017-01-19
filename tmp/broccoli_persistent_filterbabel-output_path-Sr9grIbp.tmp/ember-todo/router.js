define('ember-todo/router', ['exports', 'ember', 'ember-todo/config/environment'], function (exports, _ember, _emberTodoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberTodoConfigEnvironment['default'].locationType,
    rootURL: _emberTodoConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.resource('tasks', function () {
      this.route('new');
      this.route('edit', { path: '/edit/:task_id' });
    });
  });

  exports['default'] = Router;
});