SarahWebsite.Routers.Contents = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "about_me": "aboutMe",
    "contact": "contact",
    "projects": "projects",
    "resume": "resume",
    "close_resume": "closeResume"
  },

  index: function () {
  },

  aboutMe: function () {
    aboutMe = new SarahWebsite.Views.AboutMe();
    $('#display').html(aboutMe.render().$el);
  },

  contact: function () {
    contact = new SarahWebsite.Views.ContactForm();
    $('#display').html(contact.render().$el);
  },

  projects: function () {
    projects = new SarahWebsite.Views.Projects();
    $('#display').html(projects.render().$el);
  },

  resume: function () {
    $("#resume").addClass("has-active-modal");
  },

  closeResume: function () {
    $("#resume").removeClass("has-active-modal");
  }
})