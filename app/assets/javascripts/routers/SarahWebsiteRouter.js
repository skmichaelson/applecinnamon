SarahWebsite.Routers.Contents = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "about_me": "aboutMe",
    "contact": "contact",
    "projects": "projects",
    "resume": "resume"
  },

  index: function () {
  },

  aboutMe: function () {
    aboutMe = "new SarahWebsite.Views.AboutMe";
    $('#bio').html(aboutMe);
  },

  contact: function () {
    contact = "new SarahWebsite.Views.ContactForm";
    $('#contact-me').html(contact);
  },

  projects: function () {
    projects = "new SarahWebsite.Views.Projects";
    $('#app-data').html(projects);
  },

  resume: function () {
    resume = "new SarahWebsite.Views.Resume";
    $('#my-resume').html(resume);
  }
})