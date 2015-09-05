// This code only runs on the server
Meteor.publish("complaints", function () {
  return Complaints.find({ });
});
