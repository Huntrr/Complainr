Complaints = new Mongo.Collection("complaints");

Meteor.methods({
  "addComplaint": function(title, desc) {
    Complaints.insert({
      title: title,
      desc: desc,
      createdAt: new Date(),
      resolved: false,
      votes: 1
    });
  }
});
