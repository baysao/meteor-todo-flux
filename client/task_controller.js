Controller('task', {
    'helpers': {
        isOwner: function () {
            return this.owner === Meteor.userId();
        }
    },
    'events': {
        "click .toggle-checked": function () {
            // Set the checked property to the opposite of its current value
            todoDispatcher.dispatch('task.setChecked',{data: {_id:this._id, checked: !this.checked}});
        },
        "click .delete": function () {
            todoDispatcher.dispatch('task.deleteTask',{data: {_id:this._id}});
        },
        "click .toggle-private": function () {
            todoDispatcher.dispatch('task.setPrivate',{data: {_id:this._id, private: !this.private}});
        }
    }
});