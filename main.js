import $ from "jquery";
import Scrollmap from "scrollmap";

(function() {
    const Site = {
        init() {
            this.animate.homepage();
            this.productModal();
            this.productSubnav();
            this.scrollTopArrow();
        },
        scrollTopArrow() {
            $(document).ready(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        $('.scrollup').fadeIn();
                    } else {
                        $('.scrollup').fadeOut();
                    }
                });
                $('.scrollup').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            });
        },
        animate: {
            homepage() {
                Scrollmap.trigger({
                    target: '.design-layout-card',
                    surfaceVisible: 0.85
                });
            }
        },
        productSubnav() {
            //will use hooks to trigger visible class

            $(window).on("scroll", () => {
                const top = $(window).scrollTop();

                if (top > 150) {
                    $("#filters").addClass("scrolling");
                } else {
                    $("#filters").removeClass("scrolling");
                }
            });

            //offest window scroll top for fixed sub nav
            $("#filters").on("click", (e) => {
                $(e.currentTarget).find("ul").toggleClass("menu-active");
            });
        },
        productModal() {
            const pageTarget = $('.collection-type-products.view-item .ProductItem-details-share');
            const contactButton = $('.button-wrapper');

            $(pageTarget).html(contactButton);
            //bind events
            $('.ProductItem-details-share .button-wrapper').on("click", () => {
                location.pathname = "/contact-us";
            });
        }
    };

    Site.init();
})();