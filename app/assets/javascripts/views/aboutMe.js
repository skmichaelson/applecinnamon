SarahWebsite.Views.AboutMe = Backbone.View.extend({
  swapView: function(oldView, newView) {
    oldView.removeClass("visible");
    newView.addClass("visible");
  },

  className: "group",

  template: JST['aboutMe'],

  render: function() {
    console.log("In the about me render function - line 1");
    console.log(this);
    var renderedContent = this.template();
    console.log("About me render function, post rendered content");
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
    this.swapView($pic, $newPic);
    this.swapView($caption, $newCaption);
  }
});