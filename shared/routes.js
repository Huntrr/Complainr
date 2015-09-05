Router.configure({
  layoutTemplate: 'Complainr'
});

Router.route('/', function() {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/complaint/:_id', function() {
  var params = this.params;
  this.render('complaintPage', {
    data: function () {
      return {
        complaints: Complaints.findOne({_id: params._id})
      };
    }
  });
}, {
  name: 'complaint.show'
});

Router.route('/complaint/:_id/callDoctor', function() {
  var params = this.params;
  this.render('doctorPage');
}, {
  name: 'callDoctor.show'
});

Router.route('/complaint/:_id/contactPresident', function() {
  var params = this.params;
  this.render('presidentPage');
}, {
  name: 'contactPresident.show'
});