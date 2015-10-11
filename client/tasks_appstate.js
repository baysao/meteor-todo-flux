AppState.set('tasks', {
    incompleteCount: 0,
    list: [],
    hideCompleted: false
});
AppState.set('tasks.incompleteCount',  function(){
    return Tasks.find({checked: {$ne: true}}).count();
});
AppState.set('tasks.list',  function(){
    if (AppState.get("tasks.hideCompleted")) {
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    } else {
        return Tasks.find({}, {sort: {createdAt: -1}});
    }
});