SarahWebsite.Views.ContactForm = Backbone.View.extend({
  className: "group",

  template: JST['contact'],

  events: {
    "submit #message-form": "sendMessage"
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  sendMessage: function () {
    event.preventDefault();
    var formData = $('#message-form').serialize();

    $.ajax({
      url: "/contents/send_message",
      type: "POST",
      data: formData,
      success: function () {
        $('#message-form')[0].reset();
        alert("Thanks! Your message has been sent!");
      }
    });
  }
})