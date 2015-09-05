Template.complaintPage.helpers({
  
  resolutionList: function() {
  return Resolutions.find({complaintId: this.complaints._id})
  }
})

Template.complaintPage.events({
  "click .homeButton": function(e) {
    Router.go('home');
  },
  "submit .new-resolution": function(e) {
    console.log("AWD");
    e.preventDefault();

    var desc = e.target.description.value;

    Meteor.call("addResolution", this.complaints._id, desc);

    //Clear the form
    e.target.description.value = "";
  }
    
    
    
});
