
// happens at start

//LoadScript(yoxviewPath + "yoxview-nojquery.js");

///////////////////////////////////////////////////////////////////////////////
//	Handle empty search
///////////////////////////////////////////////////////////////////////////////
$( ".search" ).keyup(function() {
	if ($('.list').is(':empty')){
		$('.postmessage').html("If there is something more specific that you are looking for please email me at <a href='mailto:celie@umich.edu?subject=webfeedback'>celie@umich.edu</a>");
	}
	else{
		$('.postmessage').html('');
	}
});

$(function(){
	///////////////////////////////////////////////////////////////////////////
	//	Handle mobile nav
	///////////////////////////////////////////////////////////////////////////
	$('#menu').slicknav({
        prependTo: "#header",
        closeOnClick: "true",
        label: "Menu &#9776;"
    });
    $('.content').click(function(){
        $('#menu').slicknav('close');
    })

	///////////////////////////////////////////////////////////////////////////
	//	Handle picture viewer
	///////////////////////////////////////////////////////////////////////////
	$('.yoxview').yoxview();
});
