define('ember-todo/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        title: _emberData['default'].attr('string'),
        date: _emberData['default'].attr('date'),
        description: _emberData['default'].attr('string'),
        created: _emberData['default'].attr('string', {
            defaultValue: function defaultValue() {
                return new Date();
            }
        })
    });
});