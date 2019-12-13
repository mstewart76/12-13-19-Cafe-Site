$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 10000);

$(function(){
    var SetCarouselHeight = function() {
        $("#myCarousel .item > img").height(function(){
            return $("#myCarousel").width() * 0.5;
        });
    }

    SetCarouselHeight();
    $(window).resize(function(){
        SetCarouselHeight();
    }); 
});