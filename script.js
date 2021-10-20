// $("textarea").autoResize();

var zero = 0;

$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".navbar").toggleClass("hide", $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
  // toggle
  $(".icon").click(function () {
    $(".navbar").toggleClass("active");
  });
  $(".wrapper").click(function () {
    $(".icon").toggleClass("close");
  });
});
// page loading scripts
$(window).on("load", function () {
  $(".loader").fadeOut(1000);
  $(".body").fadeIn(1000);
});

// javascript
// const navbar = document.querySelector(".navbar");
// const icon = document.querySelector(".icon");

// document.onclick = function (e) {
//   if (e.target.toggleClass !== "navbar" && e.target.toggleClass !== "icon") {
//     navbar.classList.remove("active");
//     icon.classList.remove("close");
//   }
// };
// icon.onclick = function () {
//   icon.classList.add("close");
//   navbar.classList.add("active");
// };
