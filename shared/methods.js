Complaints = new Mongo.Collection("complaints");

Meteor.methods({
  "addComplaint": function(title, desc) {
    Complaints.insert({
      title: title,
      desc: desc,
      createdAt: new Date(),
      votes: 1
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
