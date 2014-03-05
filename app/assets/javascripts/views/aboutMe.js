SarahWebsite.Views.AboutMe = Backbone.View.extend({
  template: JST['aboutme'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})