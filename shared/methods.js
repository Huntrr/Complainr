Complaints = new Mongo.Collection("complaints");
Resolutions = new Mongo.Collection("resolutions");

Meteor.methods({
  "addComplaint": function(title, desc) {
    Complaints.insert({
      title: title,
      desc: desc,
      createdAt: new Date(),
      resolved: false,
      votes: 1
    });
  },
  "addResolution": function(complaintId, description) {
    Resolutions.insert({
      complaintId: complaintId,
      description: description,
      createdAt: new Date(),
      likes: 0
    });
  }
});
