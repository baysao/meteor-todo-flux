taskStore = {
    setChecked: function(data){
        Meteor.call("setChecked", data._id, data.checked);
    },
    deleteTask: function(data){
        Meteor.call("deleteTask", data._id);
    },
    setPrivate: function(data){
        Meteor.call("setPrivate", data._id, data.private);
    }
}