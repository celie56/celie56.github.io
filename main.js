
// container for pages, this list will be used to generate buttons and link
// to documents in the pages folder (let's pretend I know how to JSON)
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
  },

  {
	  "header": "Is Chris Working?",
	  "button": "Working?",
	  "path": "working.html"
  }

];

// header and content declarations
$header = $("#header");
$content = $("#content");
var currentPage = 0;
var intervals = []; // this keeps track of timers on different pages

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
var GenButtons = function GenButtonsF() {
	for (var i = 0; i < pages.length; i++) {
		$("#buttons").append("<li class=\"button\" id=\"" + i + "\">" + pages[i].button + "</li>");
	}
	$(".button").bind("click", function (event) {
		update($(this)[0].id);
	});
}
GenButtons();
// toggles whether the button is active or not
var toggleButton = function toggleButtonF(num) {
	$("#buttons li:nth(" + num + ")").toggleClass("active");
};

// Update everything function
var update = function updateF(number) {
	toggleButton(currentPage);
	currentPage = number;
	toggleButton(currentPage);

	intervals.forEach(function(e){ 	// remove outstanding timers
		clearInterval(e);
	});

	setHeader(pages[number].header);
	setContent(pages[number].path);
};
toggleButton(0);
update(0);      // Initial Update



// Menu stuff
$('#smenu').sidr();     // initialize menu
// clicking anywhere will close the menu
$('html').bind('click', function (e) {
	if (!$(e.target).hasClass('button'))
		$.sidr('close');
});

