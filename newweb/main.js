
$header		= $("#header");
$content	= $("#content");

var pages =
[
  {
    "header": "Main",
    "path": "stuff"
  },
  {
    "header": "Main",
    "path": "stuff"
  }
];

var setHeader = function setHeaderF(header){
	$header.html(header);
}
var setContent = function setContentF(path){
	$.get(path, function(data){
		$content.html(data);
	})
}

setHeader(pages[0].header);
setContent(pages[0].path);

console.log(pages[0]);