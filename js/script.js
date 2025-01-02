$(document).ready(function () {
    /* Header Section Start*/
    let typed = new Typed(".typing", {
        strings : ["Nayem Nazu"],
        typeSpeed : 100,
        backSpeed : 300,
        loop : true
    })
    /* Header Section End*/

    /* Testimonial Section Start*/
    let multipleCardCarousel = document.querySelector("#carouselExampleControls");
    if (window.matchMedia("(min-width: 100px)").matches) {
        let carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });
        let carouselWidth = $(".carousel-inner")[0].scrollWidth;
        let cardWidth = $(".carousel-item").width();
        let scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 0) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }
    /* Testimonial Section Start*/
})