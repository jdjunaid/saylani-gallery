$(document).ready(function(){
	$('.images-container .img').on("mouseover",function(){
		var className = this.classList[1];
		$('.main-image').css({"background-image":"url('"+className+".jpg')"});
	});
	$('.images-container .img').on("click",function(){
		var className = this.classList[1];
		$("body").css({"background-image":"url('"+className+".jpg')"});
	});
});