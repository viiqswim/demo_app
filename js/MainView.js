!function() {
    var MainView = Backbone.View.extend({
        initialize: function () {
            var self = this;
            this.offset = 0;
            this.getData();
        },

        render: function (data) {
            var template = _.template(main_template);
            this.$el.find('.info_container').html(template(data));

            return this;
        },

        getData: function(callback) {
            var self = this;
            var params = {
                offset: self.offset
            };
            $.get("server_request.php", params, function( data ) {
                var json_data = JSON.parse(data);
                if(json_data['business_info'] === undefined) {
                    return;
                }
                self.render(json_data['business_info'])
                self.selectStarRating(json_data['business_info']['total_rating']['total_avg_rating']);
            });
        },
        
        selectStarRating: function (rating) {
            var number_of_stars = 0;
            if(rating < 0.5) {
                // Do nothing
            } else if(rating < 1.5) {
                number_of_stars = 1;
            } else if(rating < 2.5) {
                number_of_stars = 2;
            } else if(rating < 3.5) {
                number_of_stars = 3;
            } else if(rating < 4.5) {
                number_of_stars = 4;
            } else if(rating <= 5) {
                number_of_stars = 5;
            }
            this.$el.find('.business.rating .' + number_of_stars).addClass('filled');
        },
    });

    var main_template = '\
    <div class="col-md-8"> \
        <div class="page-header"> \
            <h1 class="business_name"><%= business_name %></h1> \
            <div class="business rating pull-left"> \
                <span class="5">☆</span> \
                <span class="4">☆</span> \
                <span class="3">☆</span> \
                <span class="2">☆</span> \
                <span class="1">☆</span> \
            </div> \
            <span class="review_summary">\
                (<b class="review_count"><%= total_rating.total_no_of_reviews %></b> reviews)\
            </span> \
        </div> \
    </div> \
    <div class="col-md-4"> \
        <div class="view"> \
            <address> \
            <strong>Address</strong><br> \
            <span class="business_address"><%= business_address %></span> \
            <br> \
            <abbr title="Phone">P:</abbr> <span class="business_phone"><%= business_phone %></span> \
            </address> \
        </div> \
    </div> \
    ';

    new MainView({el: '.business_info'});
}();