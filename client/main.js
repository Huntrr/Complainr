Meteor.subscribe("complaints");

Meteor.startup(function() {
  Session.set("hideResolved", false);
});

// Defines the variables ({{VAR_NAME}}) in the html nody
Template.body.helpers({
  year: function() {
    var date = new Date();
  }
});



