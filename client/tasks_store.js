tasksStore = {
    addTask: function (text) {
        Meteor.call("addTask", text);
    },
    hideCompleted: function (state) {
        AppState.set('tasks', {hideCompleted: state});
    }
}