SarahWebsite.Views.Projects = Backbone.View.extend({
  template: JST['projects'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});