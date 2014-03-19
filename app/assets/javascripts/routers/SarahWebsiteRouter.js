SarahWebsite.Routers.Contents = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $('#display');
  },

  routes: {
    "": "index",
    "about_me": "aboutMe",
    "contact": "contact",
    "projects": "projects",
    "resume": "resume"
  },

  index: function () {
    var home = new SarahWebsite.Views.Home();
    this._swapView(home);
  },

  aboutMe: function () {
    var aboutMe = new SarahWebsite.Views.AboutMe();
    this._swapView(aboutMe);
  },

  contact: function () {
    var contact = new SarahWebsite.Views.ContactForm();
    this._swapView(contact);
  },

  projects: function () {
    var projects = new SarahWebsite.Views.Projects();
    this._swapView(projects);
  },

  resume: function () {
    $("#resume").addClass("has-active-modal");
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }


});