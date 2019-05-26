(function( $ ){
$( document ).ready( function() {
	// fixed price range
	$( '.input-range-fixed').each(function(){
		var value = $(this).attr('data-slider-value');
		var separator = value.indexOf(',');
		if( separator !== -1 ){
			value = value.split(',');
			value.forEach(function(item, i, arr) {
				arr[ i ] = parseFloat( item );
			});
		} else {
			value = parseFloat( value );
		}
		$( this ).slider({
			formatter: function(value) {
				console.log('fixed: ', value);
				reset_fixed_price();
				return '$' + value;
			},
			min: parseFloat( $( this ).attr('data-slider-min') ),
			max: parseFloat( $( this ).attr('data-slider-max') ), 
			range: $( this ).attr('data-slider-range'),
			value: value,
			tooltip_split: $( this ).attr('data-slider-tooltip_split'),
			tooltip: $( this ).attr('data-slider-tooltip')
		});

		function reset_fixed_price() {
			var price_val = $('.input-range-fixed').val();
			if (!price_val) return;
			var fixed_price = '$' + price_val.split(',')[0] + ' - ' + '$' + price_val.split(',')[1];
			$('#fixed-price').html(fixed_price);
		}
	});

	// hourly price range
	$( '.input-range-hourly').each(function(){
		var value = $(this).attr('data-slider-value');
		var separator = value.indexOf(',');
		if( separator !== -1 ){
			value = value.split(',');
			value.forEach(function(item, i, arr) {
				arr[ i ] = parseFloat( item );
			});
		} else {
			value = parseFloat( value );
		}
		$( this ).slider({
			formatter: function(value) {
				console.log('hourly: ', value);
				reset_hourly_price();
				return '$' + value;
			},
			min: parseFloat( $( this ).attr('data-slider-min') ),
			max: parseFloat( $( this ).attr('data-slider-max') ), 
			range: $( this ).attr('data-slider-range'),
			value: value,
			tooltip_split: $( this ).attr('data-slider-tooltip_split'),
			tooltip: $( this ).attr('data-slider-tooltip')
		});

		function reset_hourly_price() {
			var price_val = $('.input-range-hourly').val();
			if (!price_val) return;
			var hourly_price = '$' + price_val.split(',')[0] + ' - ' + '$' + price_val.split(',')[1];
			$('#hourly-price').html(hourly_price);
		}
	});
	
 } );
} )( jQuery );