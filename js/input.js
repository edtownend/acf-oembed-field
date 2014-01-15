(function($){


	/*
	*  acf/setup_fields
	*
	*  This event is triggered when ACF adds any new elements to the DOM.
	*
	*  @type	function
	*  @since	1.0.0
	*  @date	01/01/12
	*
	*  @param	event		e: an event object. This can be ignored
	*  @param	Element		postbox: An element which contains the new HTML
	*
	*  @return	N/A
	*/

	$(document).live('acf/setup_fields', function(e, postbox){

		var oembed_timeout;

		function get_oembed(context, e) {
			var oembed_url = $(context).find('input.oembed').val(),
				$embed_wrap = $(context).find('.embed_wrap');

			if (oembed_url.length < 6) {
				$embed_wrap.html('');
				return;
			}

			if (e.type === 'paste' || e.which <= 90 && e.which >= 48 || e.which >= 96 && e.which <= 111 || e.which == 8 || e.which == 9 || e.which == 187 || e.which == 190) {

				$embed_wrap.html('').addClass('loading');

				$.ajax({
					type : 'POST',
					dataType : 'json',
					url : window.ajaxurl,
					data : {
						'action': 'acf_oembed_handler',
						'oembed_url': oembed_url
					},
					success: function(response) {
						$embed_wrap.html(response.embed).removeClass('loading');
					}
				});
			}
		}

		$(postbox).find('.oembed').each(function(){
			$(this).bind('paste', function(e){
				var $input = $(this);
				var context = $input.parents('.acf-oembed-field');
				get_oembed(context, e);
			})
			$(this).bind('keyup', function(e){
				var $input = $(this);
				if (oembed_timeout) clearTimeout(oembed_timeout);

				oembed_timeout = setTimeout(function(){
					var context = $input.parents('.acf-oembed-field');
					get_oembed(context, e);
				}, 500);
			});

		});

	});

})(jQuery);
