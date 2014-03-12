SarahWebsite.Views.AboutMe = Backbone.View.extend({
  $el: $("#display"),
  className: "group",

  template: JST['aboutme'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})