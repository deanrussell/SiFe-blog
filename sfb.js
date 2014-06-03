$(document).ready(function(){
    var $k = $('img');
    $k.click(function(){
        $(this).effect('bounce', {times: 3}, 500);
    });
});