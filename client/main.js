Meteor.subscribe("complaints");
Meteor.subscribe("resolutions");

Meteor.startup(function() {
  Session.set("hideResolved", false);
});

// Defines the variables ({{VAR_NAME}}) in the html nody
Template.Complainr.helpers({
  year: function() {
    var date = new Date();
    return date.getFullYear();
  }
});



