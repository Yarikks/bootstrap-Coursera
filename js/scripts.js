$(document).ready(function(){
    $('#myCarousel').carousel({ interval: 2000 });
    
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#linkLogin').click(function(){
        $('#loginModal').modal('toggle');
    });

    $('#linkReserve').click(function(){
        $('#myTable').modal('toggle');
    });
});