if ( $(".owl-carousel").length > 0 ){
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop:true, //Зацикливаем слайдер
            nav:false, //Отключил навигацию
            autoplay:true, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:4000, //Время смены слайда
            responsive:{ //Адаптация в зависимости от разрешения экрана
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    });
}

