SarahWebsite.Views.Home = Backbone.View.extend({
  $el: $("#display"),
  className: "group",

  template: JST['home'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})