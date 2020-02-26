$(document).ready(function(){
    //$(".owl-carousel").owlCarousel();
});
var owl = $(".owl-carousel");
console.log(owl);
owl.owlCarousel({
    items:1,
    center:true,
    loop:true,
    margin:10000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});
//next.owl.carousel
console.log($('.old-prev'));
$('.owl-prev').on('click', function() {
    owl.trigger('prev.owl.carousel',[1000])
})
$('.owl-next').on('click', function() {
    owl.trigger('next.owl.carousel',[1000])
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})