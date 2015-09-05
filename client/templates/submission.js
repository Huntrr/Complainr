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

