var progressBar = document.querySelector(".progress-bar");
var progressItems = progressBar.querySelectorAll(".progress-item");

function toggleActive() {
  var currentScrollPos = window.pageYOffset;

  progressItems.forEach((item, index) => {
    var section = document.querySelector(item.querySelector("a").getAttribute("href"));

    if (section.offsetTop - progressBar.offsetHeight <= currentScrollPos && section.offsetTop + section.offsetHeight - progressBar.offsetHeight > currentScrollPos) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", toggleActive);
