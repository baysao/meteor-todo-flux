Controller('body', {
    'helpers': {
        tasks: function () {
            return AppState.get('tasks.list');
        },
        hideCompleted: function () {
            return AppState.get('tasks.hideCompleted');
        },
        incompleteCount: function () {
            return AppState.get('tasks.incompleteCount');
        }
    },
    'events': {
        "submit .new-task": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var text = event.target.text.value;

            // Insert a task into the collection
            todoDispatcher.dispatch('tasks.addTask', {data: text});

            // Clear form
            event.target.text.value = "";
        },
        "change .hide-completed input": function (event) {
            todoDispatcher.dispatch('tasks.hideCompleted', {data: event.target.checked});
        }
    }
})