SarahWebsite.Views.Home = Backbone.View.extend({
  className: "group",

  template: JST['home'],

  events: {
    "click #resume a": "closeResume"
  },

  closeResume: function (event) {
    $("#resume").removeClass("has-active-modal");
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});