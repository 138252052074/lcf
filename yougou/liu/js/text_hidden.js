$(function() {
	$('#dot1').dotdotdot();

	$('#dot2').dotdotdot();

	$('#dot3').dotdotdot({
		after: 'a.readmore'
	});

	$('#dot4').dotdotdot({
		watch: 'window'
	});

	var $dot5 = $('#dot5');
	$dot5.append(' <a class="toggle" href="#"><span class="open" id="open">∨</span></a>');
//	$dot5.append(' <a class="toggle" href="#"><span class="open" id="open">∨</span><span class="close" id="close">∧</span></a>');

	function createDots() {
		$dot5.dotdotdot({
			after: 'a.toggle'
		});
	}

	function destroyDots() {
		$dot5.trigger('destroy');
	}
	createDots();

	$dot5.on(
		'click',
		'a.toggle',
		function() {
			$dot5.toggleClass('opened');

			if ($dot5.hasClass('opened')) {
				destroyDots();
			} else {
				createDots();
			}
			return false;
		}
	);

	$('#dot6 .pathname').each(function() {
		var path = $(this).html().split('/');
		if (path.length > 1) {
			var name = path.pop();
			$(this).html(path.join('/') + '<span class="filename">/' + name + '</span>');
			$(this).dotdotdot({
				after: '.filename',
				wrap: 'letter'
			});
		}
	});

});