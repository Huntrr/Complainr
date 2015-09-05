Complaints = new Mongo.Collection("complaints");
Resolutions = new Mongo.Collection("resolutions");

Meteor.methods({
  "addComplaint": function(title, desc) {
    Complaints.insert({
      title: title,
      desc: desc,
      createdAt: new Date(),
      votes: 1,
      resolved: false
    });
  },
  "addResolution": function(complaintId, description) {
    Resolutions.insert({
      complaintId: complaintId,
      description: description,
      createdAt: new Date(),
      likes: 0
    });

    Complaints.update(complaintId, {
      $set: {resolved: true}
    });
  },
  "voteComplaint": function(_id, val) {
    Complaints.update(_id, {
      $inc: {votes: val}
    });

    if(Complaints.findOne({_id: _id}).votes < -5) {
      Complaints.remove(_id);
    }
  }
});
