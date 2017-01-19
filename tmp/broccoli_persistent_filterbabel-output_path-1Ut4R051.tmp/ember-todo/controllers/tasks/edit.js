define('ember-todo/controllers/tasks/edit', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

        actions: {
            editTask: function editTask(id) {
                var _this = this;

                var self = this;
                var title = this.get('model.title');
                var description = this.get('model.description');
                var date = this.get('model.date');

                //Update task
                this.store.findRecord('task', id).then(function (task) {
                    task.set('title', title);
                    task.set('description', description);
                    task.set('date', new Date(date));
                    // Save to Database
                    task.save();

                    _this.transitionToRoute('tasks');
                });
            }
        }
    });
});