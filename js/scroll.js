$(document).ready(function () {
    const sections = $("section[id]");
    const navLinks = $(".nav-link");

    $(window).on("scroll", function () {
      let currentSection = "";

      sections.each(function () {
        const sectionTop = $(this).offset().top - 100;
        const sectionHeight = $(this).outerHeight();
        if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() < sectionTop + sectionHeight) {
          currentSection = $(this).attr("id");
        }
      });

      navLinks.removeClass("active");
      navLinks.each(function () {
        if ($(this).attr("href") === "#" + currentSection) {
          $(this).addClass("active");
        }
      });
    });
  });
