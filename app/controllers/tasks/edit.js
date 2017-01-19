import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        editTask: function (id) {
            const self = this;
            const title = this.get('model.title');
            const description = this.get('model.description');
            const date = this.get('model.date');

            //Update task
            this.store.findRecord('task', id)
                .then((task) => {
                    task.set('title', title);
                    task.set('description', description);
                    task.set('date', new Date(date));
                    // Save to Database
                    task.save();

                    this.transitionToRoute('tasks');
                });
        }
    }
});
