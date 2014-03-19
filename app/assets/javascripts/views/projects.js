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
    "click #prev": "prevFeature"
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
  }
});