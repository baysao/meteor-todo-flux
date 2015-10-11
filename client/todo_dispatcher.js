todoDispatcher = new MeteorFlux.Dispatcher();
todoDispatcher.register(function (action) {
    switch (action.type) {
        case "tasks.addTask":
            tasksStore.addTask(action.data);
            break;
        case "tasks.hideCompleted":
            tasksStore.hideCompleted(action.data);
            break;
        case 'task.setChecked':
            taskStore.setChecked(action.data);
            break;
        case 'task.deleteTask':
            taskStore.deleteTask(action.data);
            break;
        case 'task.setPrivate':
            taskStore.setPrivate(action.data);
    }
});