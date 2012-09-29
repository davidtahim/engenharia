// JavaScript Document
$(document).bind('touchstart', function() {
	$('btnCamera').bind('touchstart', function() {
		navigator.camera.getPicture( function(data) {
			$('.capture')
				.attr('src','data:image/jpeg;base64,' + data) 
				.css('visibility', 'visible');
		}, function( error ) {
			console.log('Error');
		},{
			destinationType:Camera.DestinationType.DATA_URL, 
			sourceType:Camera.PictureSourceType.CAMERA,
			allowEdit:false,
			targetWidth: 135,
			targetHeight:200
		} );
	});
	$('#btnGallery').bind( 'touchstart'), function(){
		navigator.camera.getPicture(function(data) {
			$( '.capture' )
				.attr('src', 'data:image/jpeg;base64,' + data)
				.css('visibility','visible');
		}, function(error) {
			console.log('Error');
		}, {
			destinationType:Camera.DestinationType.DATA_URL,
			sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: false,
			targetWidth: 135,
			targetHeight: 200,
			mediaType:Camera.MediaType.PICTURE
		} );
	} );
	
	$('capture').load(function(){
		$(this)
			.css('left', Math.round(($('.panel').outerWidth()- $(this).outerWidth() )/
			.css('top', Math.round((270 - $(this).outerHeight()) / 2) + 'px');
	});