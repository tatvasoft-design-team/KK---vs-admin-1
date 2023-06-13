//Prevent Page Reload on all # links
var allLinks = document.querySelectorAll("a[href='#']");
for (var i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", disableDefaultAction, false);
}
function disableDefaultAction(e) {
  e.preventDefault();
}

// On scroll Add Class
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    document.body.classList.add('page-scrolled');
  }
  else {
    document.body.classList.remove('page-scrolled');
  }
});

// Footer Adjustment
function footerAdj() {
  var footerH = document.querySelector(".footer").offsetHeight;
  document.querySelector(".footer").style.marginTop = "-" + footerH + "px";
  document.querySelector(".wrapper").style.paddingBottom = footerH + "px";
};
footerAdj();
window.addEventListener("resize", function () {
  footerAdj();
});

// Add remove class when window resize finished
var $resizeTimer;
window.addEventListener("resize", function () {
  if (!document.body.classList.contains("window-resizing")) {
    document.body.classList.add("window-resizing");
  }
  clearTimeout($resizeTimer);
  $resizeTimer = setTimeout(function () {
    document.body.classList.remove("window-resizing");
  }, 250);
});

// On Load Page Visible
window.addEventListener("load", function () {
  document.body.classList.add("page-loaded");
  animationStart();
});

// Page Animation 
function animationStart() {
  AOS.init({ once: true, offset: 100, easing: "ease-out-sine", duration: 800 });
};