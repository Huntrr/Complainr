Template.home.helpers({
  complaints: function() {
    if(Session.get("hideResolved")) {
      return Complaints.find({resolved: {$ne: true}}, {sort: {votes: -1, createdAt: -1}});
    } else {
      return Complaints.find({}, {sort: {votes: -1, createdAt: -1}});
    }
  },
  year: function() {
    var date = new Date();
    return date.getFullYear();
  },
  count: function() {
    return Complaints.find().count();
  },
  someComplaints: function() {
    return Complaints.find().count() > 0;
  },
  multipleComplaints: function() {
    return Complaints.find().count() > 1;
  }

  
});
