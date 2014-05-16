
$header		= $("#header");
$content	= $("#content");
$buttons	= $("#buttons");
$picture	= $("#picture");

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

var currentpage = 0;

var setHeader = function setHeaderF(header){
	$header.html(header);
}
var setContent = function setContentF(path){
	$.get("pages/" + path, function(data){
		$content.html(data);
	})
}
var genButtons = function genButtonsF(){
    for(var i = 0; i < pages.length; i++){
        $buttons.append("<li id=\"" + i + "\"><a>" + pages[i].button + "</a></li>" );
    }
}
var update = function updateF(number){
    setHeader(pages[number].header);
    setContent(pages[number].path);
}

// Personal Functions
var removeAll = function removeAllF(){
	$picture.remove();
	$buttons.remove();
	$header.remove();
	$content.remove();
}
var addGames = function addGamesF(){
	$('head').append('<script src=\'js/blackjack.js\'></script>');
}

// Called immediately
update(0);
genButtons();
$('#0').addClass('active');

if(window.location.pathname = "/nopic"){
  $picture.remove();
}

// waiting
$("li").click(function(event){
    $('#' + currentpage).removeClass('active');
    $(this).addClass('active');
    update($(this)[0].id);
    currentpage = $(this)[0].id;
});
