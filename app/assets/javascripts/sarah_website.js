window.SarahWebsite = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
    new SarahWebsite.Routers.Contents({
        "$rootEl": $("main")
    });

    Backbone.history.start();
    }
};

$(document).ready(function(){
    SarahWebsite.initialize();

    $(".modal-close-button").on("click", function(event){
        event.preventDefault();
        $("#resume").removeClass("has-active-modal");
    });
});
