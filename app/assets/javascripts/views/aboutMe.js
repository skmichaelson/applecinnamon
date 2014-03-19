SarahWebsite.Views.AboutMe = Backbone.View.extend({
  $el: $("#display"),

  className: "group",

  template: JST['aboutMe'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click .photo div": "changePhoto"
  },

  changePhoto: function (event) {
    event.preventDefault();
    var $pic = $(event.currentTarget);
    var oldId = parseInt($pic.attr("data-id"));
    var newId = (oldId + 1) % 3 + 1;

    // Grab the pictures and captions with the associated ID
    var $newPic = $('.photo').find("[data-id='" + newId + "']");
    var $caption = $('.caption').find("[data-id='" + oldId + "']");
    var $newCaption = $('.caption').find("[data-id='" + newId + "']");

    // Swap the photos and the captions
    $pic.removeClass("visible");
    $caption.removeClass("visible");
    $newPic.addClass("visible");
    $newCaption.addClass("visible");
  }
});