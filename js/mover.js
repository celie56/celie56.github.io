var message = document.getElementById("message");
message.innerHTML = "Press Enter to Begin";

keypress(enter,function(){
	var canvas=document.getElementById("Canvas");
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(0,0,150,75);
});
