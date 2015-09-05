Template.complaint.events({
  'click .resolveButton': function(e) {
    Router.go('complaint.show', {_id:this._id});
  },
  
  'click .emergencyButton': function(e) {
    Router.go('callDoctor.show', {_id:this._id});
  },
  
  'click .presidentButton': function(e) {
    Router.go('contactPresident.show', {_id:this._id});
  }
});
