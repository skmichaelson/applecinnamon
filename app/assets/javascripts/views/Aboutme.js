SarahWebsite.Views.AboutMe = Backbone.View.extend ({
  template: JST['aboutme'],
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});