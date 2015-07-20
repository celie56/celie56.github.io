
// happens at start

//LoadScript(yoxviewPath + "yoxview-nojquery.js");

$( ".search" ).keyup(function() {
	if ($('.list').is(':empty')){
		$('.postmessage').html("If there is something more specific that you are looking for please email me at <a href='mailto:celie@umich.edu?subject=webfeedback'>celie@umich.edu</a>");
	}
	else{
		$('.postmessage').html('');
	}
});

$(function(){
	$('#menu').slicknav({
        prependTo: "#header",
        closeOnClick: "true",
        label: "Menu &#9776;"
    });
    $('.content').click(function(){
        $('#menu').slicknav('close');
    })

	$('.yoxview').yoxview();
});
