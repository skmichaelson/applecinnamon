SarahWebsite.Views.ContactForm = Backbone.View.extend({
  $el: $("#display"),
  className: "group",

  template: JST['contact'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
})