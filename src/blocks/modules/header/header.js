if ( $(".nav").length > 0 ){
    window.onscroll = function() {scrollFunction();};
    var scrollElement = document.getElementById("nav");
    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollElement.classList.add("nav-scroll");
        } else {
            scrollElement.classList.remove("nav-scroll");
    }
}
}

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

