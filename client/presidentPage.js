Template.presidentPage.helpers({
  'emailLink': function() {
    var address = 'president@whitehouse.gov';
    var subject = 'URGENT: PLEASE READ: See how this one problem is bothering your constituents! [NOT SPAM] [IMPORTANT]';
    var body = 'Dear Mr. or Ms. President,\n\n I\'m writing to you today to inform you about an issue that I find to be a NATIONAL EMERGENCY. You see, myself and ' + this.votes + ' other constituents agree that "' + this.title + '" is a problem. As one of my dear Internet friends put it: "' + this.desc + '"\n\nIf that doesn\'t convince you, I don\'t know what will. Please Mr. President, we need your help.\n\nYours,\nNAME'
      var mailLink = "mailto:" + address + "?subject=" + subject + "&body=" + encodeURIComponent(body);
    return mailLink;
  }
});

Template.presidentPage.events({
  "click .homeButton": function(e) {
    Router.go('home');
  }
});
