$(document).ready(function() {

    $(window).scroll(function() {

        const headerHeight = $('#header').innerHeight();
        //высота до блока main, как скролл доходит до этой высоты, срабабывает функц.
        const infoOffset = $('main').offset().top;
        const scrolled = $(this).scrollTop();
        if (scrolled > infoOffset) {
            //шапка прилипла
            $('#header_content').addClass('fixed');
        } else if (scrolled < headerHeight) {
            //шапка отлипла
            $('#header_content').removeClass('fixed');
        }

    });
    $(window).scroll(function() {
            //блок crawl
            const element = $("#crawl");
            const spaceHeightsize = $('.space').innerHeight()
            const spaceHeight = $('.space').offset().top - spaceHeightsize
            const scrolled = $(this).scrollTop()

            if (scrolled > spaceHeight) {
                $('.crawl').addClass('spaceAnim')
            }
        })
        // $("#nav").on("click", "a", function(event) {
        //     event.preventDefault();
        //     let id = $(this).attr('href'),
        //         top = $(id).offset().top;
        //     $('body,html').animate({ scrollTop: top }, 1500);
        // })
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
    let value = 1344
    if ($(window).width() > value) {
        $('.slider').slick({
            arrows: true,
            adaptiveHeight: true,
            slidesToShow: 3,
            infinite: true,
            centerMode: true,

        })
    } else {
        $('.slider').slick({
            arrows: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            infinite: true,
        })
    }



})
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,


    // Поддержка тачпада
    touchpadSupport: true,

})