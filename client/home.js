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
    if(Session.get("hideResolved")) {
      return Complaints.find({resolved: {$ne: true}}, {sort: {votes: -1, createdAt: -1}}).count();
    } else {
      return Complaints.find({}, {sort: {votes: -1, createdAt: -1}}).count();
    }
  },
  someComplaints: function() {
    if(Session.get("hideResolved")) {
      var count = Complaints.find({resolved: {$ne: true}}, {sort: {votes: -1, createdAt: -1}}).count();
    } else {
      var count = Complaints.find({}, {sort: {votes: -1, createdAt: -1}}).count();
    }

    return count > 0;
  },
  multipleComplaints: function() {
    if(Session.get("hideResolved")) {
      var count = Complaints.find({resolved: {$ne: true}}, {sort: {votes: -1, createdAt: -1}}).count();
    } else {
      var count = Complaints.find({}, {sort: {votes: -1, createdAt: -1}}).count();
    }

    return this.count > 1;
  }

  
});
