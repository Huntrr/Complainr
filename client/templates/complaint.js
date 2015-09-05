Template.complaint.helpers({
  upvoted: function() {
    return Session.get('complaint_' + this._id) === 1;
  },
  downvoted: function() {
    return Session.get('complaint_' + this._id) === -1;
  }
});

Template.complaint.events({
  'click .resolveButton': function(e) {
    Router.go('complaint.show', {_id:this._id});
  },
  'click .upvote': function(e) {
    voteVal = Session.get('complaint_' + this._id) || 0;
    if(voteVal === 1) {
      //Already upvoted, don't double do it
      voteVal = 0;
      Meteor.call('voteComplaint', this._id, -1);
    } else if(voteVal === 0) {
      //Vote once
      voteVal = 1;
      Meteor.call('voteComplaint', this._id, 1);
    } else {
      voteVal = 1;
      Meteor.call('voteComplaint', this._id, 2);
    }

    Session.setPersistent('complaint_' + this._id, voteVal);
  },
  'click .downvote': function(e) {
    voteVal = Session.get('complaint_' + this._id) || 0;
    if(voteVal === -1) {
      voteVal = 0;
      Meteor.call('voteComplaint', this._id, 1);
    } else if(voteVal === 0) {
      voteVal = -1;
      Meteor.call('voteComplaint', this._id, -1);
    } else {
      voteVal = -1;
      Meteor.call('voteComplaint', this._id, -2);
    }

    Session.setPersistent('complaint_' + this._id, voteVal);
  },
  'click .emergencyButton': function(e) {
    Router.go('callDoctor.show', {_id:this._id});
  },
  
  'click .presidentButton': function(e) {
    Router.go('contactPresident.show', {_id:this._id});
  }
});
