// This code only runs on the server
Meteor.publish("complaints", function () {
  return Complaints.find({ });
});

Meteor.publish("resolutions", function () {
  return Resolutions.find({});
});