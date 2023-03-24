async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  await waitForMs(2000);
  return;
}
async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function pw_cursor() {
  "use strict";
  var myCursor = $(".mouse-cursor");
  if (myCursor.length) {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px,  " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px,  " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a,  .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a,  .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
}
function dateTime() {
  var now = Date.now();
  var d = new Date();
  month = d.getMonth() + 1;
  monthString = month.toString(10);
  monthN = monthString;
  year = d.getYear().toString(10);
  yearN = year[1] + year[2];
  expiry_date = monthN + "/" + yearN;
  $(".expiry_date").append(expiry_date);
  console.log(expiry_date);
}
function time() {
  var day = new Date();
  var hh = day.getHours();
  if (hh > 12) {
    hh = hh - 12;
    $(".day").text("PM");
  } else {
    $(".day").text("AM");
  }
  var hour = hh.toString(10);
  if (hour.length < 2) {
    hour = "0" + hour;
  }
  if (hh > 12) {
    console.log(hh);
    hh = hh - 12;
  }
  for (var i = 0; i < hour.length; i++) {
    var digit_index = i + 1;
    getNumber(hour[i], ".hours ", ".digit_" + digit_index);
  }
  var mm = day.getMinutes();
  var minutes = mm.toString(10);
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  for (var i = 0; i < minutes.length; i++) {
    var digit_index = i + 1;
    getNumber(minutes[i], ".minutes ", ".digit_" + digit_index);
  }
  var ss = day.getSeconds();
  var seconds = ss.toString(10);
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  for (var i = 0; i < seconds.length; i++) {
    var digit_index = i + 1;
    getNumber(seconds[i], ".seconds ", ".digit_" + digit_index);
  }
}
setInterval(() => {
  time();
});
function getNumber(number, position, digit) {
  if (number == "0") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "block");
    $(position + digit + " .bar_6").css("display", "block");
    $(position + digit + " .bar_7").css("display", "none");
  } else if (number == "1") {
    $(position + digit + " .bar_1").css("display", "none");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "none");
    $(position + digit + " .bar_5").css("display", "none");
    $(position + digit + " .bar_6").css("display", "none");
    $(position + digit + " .bar_7").css("display", "none");
  } else if (number == "2") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "none");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "block");
    $(position + digit + " .bar_6").css("display", "none");
    $(position + digit + " .bar_7").css("display", "block");
  } else if (number == "3") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "none");
    $(position + digit + " .bar_6").css("display", "none");
    $(position + digit + " .bar_7").css("display", "block");
  } else if (number == "4") {
    $(position + digit + " .bar_1").css("display", "none");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "none");
    $(position + digit + " .bar_5").css("display", "none");
    $(position + digit + " .bar_6").css("display", "block");
    $(position + digit + " .bar_7").css("display", "block");
  } else if (number == "5") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "none");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "none");
    $(position + digit + " .bar_6").css("display", "block");
    $(position + digit + " .bar_7").css("display", "block");
  } else if (number == "6") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "none");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "block");
    $(position + digit + " .bar_6").css("display", "block");
    $(position + digit + " .bar_7").css("display", "block");
  } else if (number == "7") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "none");
    $(position + digit + " .bar_5").css("display", "none");
    $(position + digit + " .bar_6").css("display", "none");
    $(position + digit + " .bar_7").css("display", "none");
  } else if (number == "8") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "block");
    $(position + digit + " .bar_6").css("display", "block");
    $(position + digit + " .bar_7").css("display", "block");
  } else if (number == "9") {
    $(position + digit + " .bar_1").css("display", "block");
    $(position + digit + " .bar_2").css("display", "block");
    $(position + digit + " .bar_3").css("display", "block");
    $(position + digit + " .bar_4").css("display", "block");
    $(position + digit + " .bar_5").css("display", "none");
    $(position + digit + " .bar_6").css("display", "block");
    $(position + digit + " .bar_7").css("display", "block");
  }
}
function setnum() {}
function pw_nav_bg() {
  "use strict";
  $(window).on("scroll", function () {
    var menu = $(".pw_header");
    var mobile_menu = $(".mobile_menu_inner");
    var progress = $(".progressbar");
    var WinOffset = $(window).scrollTop();
    if (WinOffset >= 100) {
      menu.addClass("animate");
      mobile_menu.addClass("animate");
      progress.addClass("animate");
    } else {
      menu.removeClass("animate");
      mobile_menu.removeClass("animate");
      progress.removeClass("animate");
    }
  });
}
function getSections($links) {
  return $(
    $links
      .map((i, el) => $(el).attr("href"))
      .toArray()
      .filter((href) => href.charAt(0) === "#")
      .join(",")
  );
}
function activateLink($sections, $links) {
  const yPosition = $window.scrollTop() + $(".pw_header").height() + 100;

  for (let i = $sections.length - 1; i >= 0; i -= 1) {
    const $section = $sections.eq(i);

    if (yPosition >= $section.offset().top) {
      return $links
        .removeClass("active")
        .filter(`[href="#${$section.attr("id")}"]`)
        .addClass("active");
    }
  }
}
function onScrollHandler() {
  activateLink($sections, $links);
}

function header_spacing() {
  if (window.innerWidth > 1040) {
    header = $(".pw_header");
  } else {
    header = $(".mobile_menu_inner");
  }

  $(".pw_section").each(function () {
    $(this).css("padding-top", header.height() + 30);
    $(this).on("click", function () {
      $(".pw_mobile_menu").removeClass("active");
    });
  });
}

$(document).ready(function () {
  //    alert($(".typed-strings").children("p").text());
  pw_cursor();
  pw_nav_bg();
  dateTime();
  getNumber("4", ".minutes", " .digit_1");
  contact_form();
  header_spacing();
  $("#home").css("padding-top", header.height() / 2);
  $("#home").css("padding-top", "0px");
});

const $window = $(window);
const $links = $(".menu > ul > li > a");
const $sections = getSections($links);
$window.on("scroll", onScrollHandler);

window.addEventListener("load", function () {});
let items = [];
var items_tag = $(".typed-strings").children("p");
for (var i = 0; i < items_tag.length; i++) {
  var dict = {};
  dict["text"] = $(items_tag)[i].innerHTML;
  items.push(dict);
}
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
  }
};
const carouselText = [
  { text: "Apple", color: "red" },
  { text: "Orange", color: "orange" },
  { text: "Lemon", color: "yellow" },
];

$(document).ready(async function () {
  typing(items, ".typed");
  //carousel(carouselText, ".typed")
});

async function typing(list, eleRef) {
  var i = 0;
  while (true) {
    //console.log(Object.values(list[i])[0]);
    await typeSentence(Object.values(list[i])[0], eleRef);
    await waitForMs(1500);
    await deleteSentence(".typed");
    await waitForMs(500);
    i++;
    if (i >= list.length) {
      i = 0;
    }
  }
}
async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    console.log(typeof carouselList);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}
document.addEventListener("DOMContentLoaded", function () {
  let lazyloadImages = document.querySelectorAll("iframe.lazy-loading");
  let lazyloadThrottleTimeout;
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 1);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

function menuTrigger() {
  $(".pw_mobile_menu").toggleClass("active");
}
