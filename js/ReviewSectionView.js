 var ReviewSectionView = Backbone.View.extend({
    initialize: function (options) {
        this.current_start = 0;
        this.current_end = 6;
        this.displaySingleReview(options.reviews, "new");
    },

     render: function () {
         var template = _.template(review_section_template);
         this.$el.append(template);

         return this;
     },
     
     renderSingleReview: function (review, $container) {
         var template = _.template(single_review_template);
         $container.html(template(review));

         return this;
     },

     displaySingleReview: function (reviews, type) {
         var self = this;
         var $container = null;

         if(type === "new") {
            this.$el.empty();
         }

         _.each(reviews, function (review, count) {
             if(count % 3 == 0) {
                self.render();
             }
             $container = $(self.$el.last().find('.col-md-3.' + count % 3).last());
             $container.addClass('entry');
             review = self.setRealReviewSource(review);
             self.renderSingleReview(review, $container);
             self.selectStarRating(review['rating'], $container);
         });
     },
     
     setRealReviewSource: function (review) {
         var real_source = '';
         switch(review['review_from']) {
             case '0':
                 real_source = 'Internal';
                 break;
             case '1':
                 real_source = 'Yelp';
                 break;
             case '2':
                 real_source = 'Google';
                 break;
             default:
                 real_source = 'Unknown';
         }

         review['review_from'] = real_source;

         return review;
     },

     selectStarRating: function (rating, $container) {
         var number_of_stars = 0;
         if(parseInt(rating) < 0.5) {
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
         $container.find('.reviewer.rating .' + number_of_stars).addClass('filled');
     }
});

var review_section_template = '\
<div class="col-md-12">\
    <div class="row">\
        <div class="col-md-3 0"></div> \
        <div class="col-md-1"></div>\
        <div class="col-md-3 1"></div> \
        <div class="col-md-1"></div>\
        <div class="col-md-3 2"></div> \
    </div>\
    <hr/> \
</div>\
';

var single_review_template = ' \
<h3 class="customer_name"> <%= customer_name %> <%= customer_last_name %> </h3> \
<div class="reviewer rating pull-left"> \
    <span class="5">☆</span> \
    <span class="4">☆</span> \
    <span class="3">☆</span> \
    <span class="2">☆</span> \
    <span class="1">☆</span> \
</div> \
<div class="clearfix"></div> \
    <small><div class="date pull-left"><%= date_of_submission %></div></small> \
    <br/><br/> \
    <div class="description_container"> \
        <%= description %> \
    </div> \
</div> \
<br/> \
<br/> \
<div class="pull-right">Review From: <span class="review_source"><%= review_from %></span></div> \
';