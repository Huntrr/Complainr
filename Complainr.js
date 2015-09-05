Complaints = new Mongo.Collection("complaints");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("complaints", function () {
    return Complaints.find({ });
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("tasks");

  // Defines the variables ({{VAR_NAME}}) in the html nody
  Template.body.helpers({
    complaints: function() {
      return Complaints.find({});
    }
  });

  // Defines the EVENTS bound to the SUBMISSION template
  Template.submission.events({
    "submit .new-complaint": function (e) {
      e.preventDefault();

      var title = e.target.title.value;
      var desc = e.target.description.value;

      Meteor.call("addComplaint", title, desc);

      //Clear the form
      e.target.title.value = "";
      e.target.description.value = "";
    }
  });
}


//METHODS (these need to be defined here so they can be run on the server to verify they're valid
Meteor.methods({
  "addComplaint": function(title, desc) {
    Complaints.insert({
      title: title,
      desc: desc,
      createdAt: new Date(),
    });
  }
});
