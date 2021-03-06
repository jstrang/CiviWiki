cw = cw || {};

cw.AboutView = BB.View.extend({
    el: '#about',
    aboutTemplate: _.template($('#about-template').html()),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.empty().append(this.aboutTemplate());
    },
});
