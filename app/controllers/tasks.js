import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        deleteTask: function (id) {
            this.store.findRecord('task', id)
                .then(task => {
                    task.deleteRecord();

                    task.save();
                });
        }
    }
});
