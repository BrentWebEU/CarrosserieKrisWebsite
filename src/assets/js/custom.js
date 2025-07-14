import jQuery from "jquery";

jQuery(
  (function (jQuery) {
    "use strict";

    // Start Menu JS
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > 50) {
        jQuery(".main-nav").addClass("menu-shrink");
      } else {
        jQuery(".main-nav").removeClass("menu-shrink");
      }
    });

    // Back to Top JS
    jQuery("body").append(
      '<div id="toTop" class="back-to-top-btn"><i class="bx bx-up-arrow"></i></div>'
    );
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() != 0) {
        jQuery("#toTop").fadeIn();
      } else {
        jQuery("#toTop").fadeOut();
      }
    });
    jQuery("#toTop").on("click", function () {
      jQuery("html, body").animate({ scrollTop: 0 }, 900);
      return false;
    });
  })(jQuery)
);



// const popup = new Popup({
//   id: "board",
//   titleColor: "#212121",
//   textColor: "#212121",
//   closeColor: "#FFFFFF",
//   title: "Feestweekend!",
//   backgroundColor: "#FFFFFF",
//   fontSizeMultiplier: 1,
//   content: `
//   Wij zijn gesloten van vrijdag 22/12/2023 tot 2/1/2023. Wij wensen u en uw familie prettige feesten.
//   Op vrijdag 22/12/2023 houden wij onze jaarlijkse stocktelling en zijn wij dus ook reeds gesloten. Wij danken u voor uw begrip.
//   {btn-ok}[OK]`,
//   borderWidth: ".15em",
//   borderColor: "#f22a2a",
//   css: `
//   .popup.board button {
//       border: 2px solid black;
//       background-color: transparent;
//       color: #212121;
//       width: 50%;
//       margin-top: 1em;
//   }`,
//   loadCallback: () => {
//     /* button functionality */
//     popup.show();
//     document
//       .querySelector(".popup.board button")
//       .addEventListener("click", () => {
//         popup.hide();
//       });
//   },
// });
