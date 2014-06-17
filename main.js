
// container for pages, this list will be used to generate buttons and link
// to documents in the pages folder
var pages =
[
  {
      "header": "Pura Vida Mae Bienvenidos",
      "button": "Home",
      "path": "main.html"
  },

  {
      "header": "Who is Chris Elie?",
      "button": "About",
      "path": "about.html"
  },

  {
      "header": "Projects",
      "button": "Projects",
      "path": "projects.html"
  }

];

// header and content declarations
$header = $("#header");
$content = $("#content");
var currentPage = 0;

// Updating Content Function
var setHeader = function setHeaderF(header) {
    $header.html(header);
};
var setContent = function setContentF(path) {
    // Grab content from pages/[path] and set the main page to it
    $.get("pages/" + path, function (data) {
        $content.html(data);
    });
};
// toggles whether the button is active or not
var toggleButton = function toggleButtonF(num) {
    $("#buttons li a:nth(" + num + ")").toggleClass("active");
};

// Update everything function
var update = function updateF(number) {
    toggleButton(currentPage);
    currentPage = number;
    toggleButton(currentPage);

    setHeader(pages[number].header);
    setContent(pages[number].path);
};
update(0);      // Initial Update

var setDesktopView = function setDesktopViewF() {
    $("#navigation").html("<ul id=\"buttons\" class=\"nav nav-pills navbar nav-justified navbar-fixed-top\"></ul>");

    for (var i = 0; i < pages.length; i++) {
        $("#buttons").append("<li class=\"button\" id=\"" + i + "\"><a>" + pages[i].button + "</a></li>");
    }
    // button click event woot woot
    $(".button").bind("click", function (event) {
        update($(this)[0].id);
    });
    toggleButton(currentPage);
    $(window).bind("resize", function () {
        checkWidth();
    });
};
var setMobileView = function setMobileViewF() {
    $("#navigation").html("<a id=\"simple-menu\" href=\"#sidr\">Toggle menu</a>");
    $("#navigation").append("<div id=\"sidr\" ><ul id=\"buttons\"></ul></div>");
    for (var i = 0; i < pages.length; i++) {
        $("#buttons").append("<li class=\"button\" id=\"" + i + "\"><a>" + pages[i].button + "</a></li>");
    }
    $('#simple-menu').sidr();
    $(window).bind("resize", function () {
        $('#simple-menu').sidr('close');
        checkWidth();
    });
};

var checkWidth = function checkWidthF() {
    var windowsize = $(window).width();
    if (windowsize < 800) {
        setMobileView();
    }
    else {
        setDesktopView();
    }
};
checkWidth();   // initial width check
// Listener to see if the window size changes
//$(window).resize(function () {
//    checkWidth();
//});


