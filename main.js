$header = $("#header");
$content = $("#content");
$buttons = $("#buttons");

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

var $currentPage = $("#buttons").children().first();

// Updating Content Function
var setHeader = function setHeaderF(header) {
    $header.html(header);
}
var setContent = function setContentF(path) {
    // Grab content from pages/[path] and set the main page to it
    $.get("pages/" + path, function (data) {
        $content.html(data);
    })
}

// Initial Button Generation Function
var genButtons = function genButtonsF() {
    for (var i = 0; i < pages.length; i++) {
        $buttons.append("<li class=\"button\" id=\"" + i + "\"><a>" + pages[i].button + "</a></li>");
    }
}
genButtons();   // Call immediately


// Update everything function
var update = function updateF(number) {
    setHeader(pages[number].header);
    setContent(pages[number].path);
}
update(0);      // Initial Update

// Event for when you click on a header button
$("li").click(function (event) {
    $currentPage.children().toggleClass("active");
    $currentPage = $(this);
    $(this).children().toggleClass("active");
    update($(this)[0].id);
});


$(document).ready(
   function () {
       $currentPage = $("#buttons").children().first();
       $currentPage.children().toggleClass("active");
   }
);