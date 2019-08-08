(function ($) {

	$('#countdown_dashboard').countDown({

		targetDate: {
			'day': 		15,
			'month': 	8,
			'year': 	2019,
			'hour': 	09,
			'min': 		0,
			'sec': 		0,
			'utc':    true
		  }


	    });

	$('#email_field').focus(email_focus).blur(email_blur);
	$('#subscribe_form').bind('submit', function() { return false; });

})(jQuery);
