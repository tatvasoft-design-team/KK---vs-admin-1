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
  if (window.pageYOffset > 20) {
    document.body.classList.add("page-scrolled");
  } else {
    document.body.classList.remove("page-scrolled");
  }
});

// Footer Adjustment
function footerAdj() {
  var footerH = document.querySelector(".footer").offsetHeight;
  document.querySelector(".footer").style.marginTop = "-" + footerH + "px";
  document.querySelector(".wrapper").style.paddingBottom = footerH + "px";
}
// footerAdj();
window.addEventListener("resize", function () {
  // footerAdj();
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
window.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("page-loaded");

  const navToggler = document.getElementById("nav-toggler");
  const searchToggler = document.getElementById("search-toggler");
  const overlay = document.getElementById("overlay");
  const overlaySearch = document.getElementById("overlay-search");

  // AOS Initialization
  AOS.init({
    duration: 500,
    easing: "ease-out",
    once: true,
  });

  if (navToggler) {
    const toggleNav = () => {
      document.body.classList.toggle("show-nav");
    };
    navToggler.addEventListener("click", toggleNav);
    const toggleOverlay = () => {
      document.body.classList.remove("show-nav", "show-searchbar");
    };
    overlay.addEventListener("click", toggleOverlay);
    overlaySearch.addEventListener("click", toggleOverlay);

    const toggleSearchbar = () => {
      document.body.classList.toggle("show-searchbar");
    };
    searchToggler.addEventListener("click", toggleSearchbar);
  }

  // Chart JS
  function myFunction() {
    var ctx = document.getElementById("mainChart");
    if (ctx) {
      ctx = ctx.getContext("2d");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Option 1",
            "",
            "Option 2",
            "",
            "Option 3",
            "",
            "Option 4",
            "",
            "Option 5",
          ],
          datasets: [
            {
              data: [25, 10, 2, 38, 30, 70, 60, 80, 20, 5],
              fill: true,
              borderColor: "#1A6BAF",
              backgroundColor: "#1A6BAF",
              tension: 0.3,
            },
            {
              data: [10, 16, 30, 50, 70, 44, 80, 50, 48, 68],
              fill: true,
              borderColor: "#8cb5d7",
              backgroundColor: "rgba(26, 107, 175, 0.5)",
              tension: 0.3,
            },
          ],
        },
        options: {
          radius: 0,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          animation: {
            duration: 2500,
            easing: "easeOutSine",
          },
        },
      });
    }
  }

  myFunction();

  function circularProgress() {
    bar.animate(0.8); // Number from 0.0 to 1.0
  }

  // Progress Animation
  gsap.registerPlugin(ScrollTrigger);
  const anim1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sale-card",
      start: "top 70%",
      end: "+=500",
      onEnter: circularProgress,
    },
  });


});
