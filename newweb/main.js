
$header		= $("#header");
$content	= $("#content");
$buttons    = $("#buttons");

var pages =
[
  {
    "header": "Welcome Home",
    "button": "Home",
    "path": "main.html"
  },

  {
    "header": "Main",
    "button": "Not Home",
    "path": "stuff"
  }
];

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
        $buttons.append("<li id=\"" + i + "\">" + pages[i].button + "</li>" );
    }
}

setHeader(pages[0].header);
setContent(pages[0].path);

console.log(pages[0]);