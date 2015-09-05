Template.complaintPage.helpers({
  
  resolutionList: function() {
  return Resolutions.find({complaintId: this.complaints._id})
  },
  
  count: function()
  {
    return Resolutions.find({complaintId: this.complaints._id}).count()
  },
  
  resolutionText: function()
  {
    var count = Resolutions.find({complaintId: this.complaints._id}).count();
    
    if(count === 0) return "No Solutions Yet :/"
   
    var singular = count === 1;
    
    return "Good News! The following "+(!singular ? count : "")+" solution" + (!singular ? "s" : "") + " exist" + (!singular ? "" : "s") + ":"
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
