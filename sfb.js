$(document).ready(function(){
	$('#dr').click(function(){
        $(this).effect('bounce', {times: 3}, 700);
    });
    $('span').animate(function(){
    	color: white;},
    	500
    );
});