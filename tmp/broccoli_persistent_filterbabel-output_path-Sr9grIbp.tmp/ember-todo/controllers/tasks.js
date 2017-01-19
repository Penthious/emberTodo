define('ember-todo/controllers/tasks', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            deleteTask: function deleteTask(id) {
                this.store.findRecord('task', id).then(function (task) {
                    task.deleteRecord();

                    task.save();
                });
            }
        }
    });
});