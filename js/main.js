$(document).ready(function () {

    $(".filter-button").click(function () {
        alert('aqui');
        // var value = $(this).attr('data-filter');

        // if (value == "all") {
        //     //$('.filter').removeClass('hidden');
        //     $('.filter').show('1000');
        // }
        // else {
        //     //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //     //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        //     $(".filter").not('.' + value).hide('3000');
        //     $('.filter').filter('.' + value).show('3000');

        // }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

// Scroll
$('.nav-menu li a').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
})