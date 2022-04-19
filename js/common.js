$(document).ready(function () {
    $("#toggleHam").click(function () {
        $("#megaMenu").slideToggle("slow", function () {
            if ($("#megaMenu").is(":visible")) {
                $("body").addClass("openMenu");
            } else {
                $("body").removeClass("openMenu");
            }
        });
    });
    if (screen.width <= 767) {
        $(".listItems li").click(function () {
            if ($(this).hasClass("active")) {
                $(".listItems li").removeClass("active")
            } else {
                $(".listItems li").removeClass("active");
                $(this).addClass("active");
            }
        });
    }
    $(".closebreakingnews").click(function() {
        $(".breaking-news").remove();
    });
    $(".search-icon").click(function () {
        $(".search")[0].style.width = '100%';
        $(".search").css('padding-right','10px');
        $(".search .search-icon").css('display','block');
    }),
    $(".search-box .search-icon").click(function () {
        $(".search")[0].style.width = '0';
        $(".search").css('padding-right','0');
        $(".search .search-icon").css('display','none');
    });
    setTimeout(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".scrolltop").fadeIn() : $(".scrolltop")
                .fadeOut()
        }), $(".scrolltop").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    }, 500)
});