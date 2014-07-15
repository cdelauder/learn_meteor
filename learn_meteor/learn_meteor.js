if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to learn_meteor.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      console.log(typeof console)
      if (typeof console !== 'undefined')
        $('body').text("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
