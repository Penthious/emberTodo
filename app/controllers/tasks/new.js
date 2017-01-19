import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function () {
            const title = this.get('title');
            const description = this.get('description');
            const date = this.get('date');

            //Create New Task
            const newTask = this.store.createRecord('task',{
                title: title,
                description: description,
                date: new Date(date),
            });

            // Save to Database
            newTask.save();

            //Clear Form
            this.setProperties({
                title: '',
                description: '',
                date: '',
            })
        }
    }
});
