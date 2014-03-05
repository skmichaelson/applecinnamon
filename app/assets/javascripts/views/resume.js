SarahWebsite.Views.Resume = Backbone.View.extend({
  template: JST['resume'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});