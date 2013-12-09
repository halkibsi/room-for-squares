/* jshint devel:true */
(function( $ ) {
	var origin, screen, rectangle, rtl,
		numX = 20,
		taper = false,
		now = new Date(),
		$window = $( window );

	screen = {
		width: $window.width(),
		height: $window.height()
	};

	rectangle = {
		width: screen.width / numX, //150,
		height: 250
	};

	origin = {
		x: rectangle.width / 3, //screen.width / 3,
		y: rectangle.height / 3 //screen.height / 2
	};

	function makeRect( index ) {
		var offset, position,
			yRandomOffset = 150,
			$div = $('<div/>');

		offset = {
			x: index * rectangle.width / 2,
			y: index * rectangle.height / 2
		};

		position = {
			left: origin.x + offset.x + Math.random( now ) * 20 - 10,
			top: origin.y + Math.random( now ) * yRandomOffset - yRandomOffset / 2
		};

		if ( rtl ) {
			position.left = screen.width - position.left;
		}

		$div.css( position ).appendTo('body');
	}

	function makeRow( index ) {
		origin = {
			x: rectangle.width / 3 + ( taper ? index * screen.width / 40 : 0 ),
			y: rectangle.height / 3 + index * rectangle.height / 3
		};

		rtl = false;
		_.times( numX, makeRect );
		rtl = true;
		_.times( numX, makeRect);

		if ( taper ) {
			numX = 1 === numX ? 1 : numX - 1;
		}
	}

	_.times( 20, makeRow );
})( jQuery );
