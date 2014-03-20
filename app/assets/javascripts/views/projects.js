SarahWebsite.Views.Projects = Backbone.View.extend({

  swapView: function(oldView, newView) {
    oldView.removeClass("visible");
    newView.addClass("visible");
  },

  className: "group",

  template: JST['projects'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click #next": "nextFeature",
    "click #prev": "prevFeature",
    "click img": "showPhoto",
    "click #photo-modal a": "hidePhoto"
  },

  nextFeature: function (event) {
    event.preventDefault();

    var feature = $('.visible')[0];
    var $feature = $(feature);
    var oldId = $feature.attr("data-id");
    var newId = (oldId % 3) + 1;
    var $newFeature = $('section').find("[data-id='" + newId + "']");

    this.swapView($feature, $newFeature);
  },

  prevFeature: function (event) {
    event.preventDefault();

    var feature = $('.visible')[0];
    var $feature = $(feature);
    var oldId = $feature.attr("data-id");
    var newId = ((oldId + 1) % 3) + 1;
    var $newFeature = $('section').find("[data-id='" + newId + "']");

    this.swapView($feature, $newFeature);
  },

  showPhoto: function (event) {
    event.preventDefault();
    var chosenPhoto = $(event.currentTarget);
    var photoId = chosenPhoto.attr("data-id");
    var $activePhoto = $("#selected-photo").find("[data-id='" + photoId + "']");
    $('#photo-modal').addClass('has-active-modal');
    $activePhoto.addClass('visible');
  },

  hidePhoto: function () {
    $('#photo-modal').removeClass('has-active-modal');
    $("#selected-photo img").removeClass('visible');
  }
});