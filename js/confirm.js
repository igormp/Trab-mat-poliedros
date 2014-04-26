/*
 * SimpleModal Confirm Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	$('#confirm-dialog input.confirm, #confirm-dialog a.confirm').click(function (e) {
		e.preventDefault();

		// example of calling the confirm function
		// you must use a callback function to perform the "yes" action
		confirm("", function () {
			window.location.href = '';
		});
	});
});

function confirm(message, callback) {
	if (document.getElementById("Alert").innerHTML != '') /*Adaptação feita por Yann Gabriel Freire de Carvalho*/
   {	$('#confirm').modal({
		closeHTML: "<a href='#' title='Close' class='modal-close'>x</a>",
		position: ["20%",],
		overlayId: 'confirm-overlay',
		containerId: 'confirm-container', 
		onShow: function (dialog) {
	
			$('.message', dialog.data[0]).append(message);
			
				$.this.click(function (){
				this.close();
			   
			});
		}
	});
	}
}