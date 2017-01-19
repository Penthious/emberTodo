define('ember-todo/controllers/tasks/new', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            addTask: function addTask() {
                var title = this.get('title');
                var description = this.get('description');
                var date = this.get('date');

                //Create New Task
                var newTask = this.store.createRecord('task', {
                    title: title,
                    description: description,
                    date: new Date(date)
                });

                // Save to Database
                newTask.save();

                //Clear Form
                this.setProperties({
                    title: '',
                    description: '',
                    date: ''
                });
            }
        }
    });
});