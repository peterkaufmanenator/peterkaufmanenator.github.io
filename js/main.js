$(function(){
	var page = 0;

	function goToPage() {
		var pos = $('#'+page).position().top;
		
	}

	$('nav a').click(function(e){
		page = '#'+$(this).data('page');
		jQuery.scrollTo(page, 500);
		e.preventDefault();
	});

});