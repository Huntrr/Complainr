Template.sortOptions.helpers({
  hideResolved: function() {
    return Session.get("hideResolved");
  }
});
Template.sortOptions.events({
  "click .hideResolved": function(e) {
    Session.set("hideResolved", !Session.get("hideResolved"));
  }
});
