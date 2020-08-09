"use strict";

(function () {
  var menu = document.querySelector(".topbar");
  var buttonMenu = document.querySelector("#button-menu");
  buttonMenu.addEventListener("click", function (e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });
})();