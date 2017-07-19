import $ from "jquery-slim";
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
            const form = $('.Footer-blocks--top .sqs-block-form');

            const pageTarget = $('.collection-type-products.view-item .ProductItem-details-share');

            const contactButton = $('.button-wrapper');

            const modal = $('#productModalContainer .modal-content-inject');

            $(pageTarget).html(contactButton);
            $(modal).html(form);

            //bind events
            $('.ProductItem-details-share .button-wrapper').on("click", () => {
                const title = $('.ProductItem-details-title').html();

                $('#productModalContainer').addClass("active");
                //close modal on UI click
                $('.modal-close').on("click", () => {
                    $('#productModalContainer').removeClass("active");
                });
                //close modal on outer container click
                $('#productModalContainer').on("click", () => {
                    $('#productModalContainer').removeClass("active");
                });
                //prevent modal from closing
                $('.modal-content').on("click", (e) => {
                    e.stopPropagation();
                });
            });
        }
    };

    Site.init();
})();