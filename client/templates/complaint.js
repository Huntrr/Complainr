Template.complaint.events({
  'click .resolveButton': function(e) {
    Router.go('complaint.show', {_id:this._id});
  }
});
