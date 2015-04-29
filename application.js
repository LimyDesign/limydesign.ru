$(document).ready(function(){
	$('#mask').mousemove(function (e){
		var mousePosX = (e.pageX/$(window).width())*100;
		var mousePosY = (e.pageY/$(window).height())*100;
		$('#background-thing').css('backgroundPosition', mousePosX + '% ' + mousePosY + '%');
	});
});