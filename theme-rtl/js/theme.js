(function( $ ){
$( document ).ready( function() {

	function check_fl_tag_box() {
		// skill box
		var skill_input_tags_length = $('#skillbox').find('.input-tag').length;
		if (skill_input_tags_length) {
			$('#skillbox').parents('.filter-item-group').find('.btn').removeClass('disabled')
		} else {
			$('#skillbox').parents('.filter-item-group').find('.btn').addClass('disabled')
		}
		// language box
		var language_input_tags_length = $('#languagebox').find('.input-tag').length;
		if (language_input_tags_length) {
			$('#languagebox').parents('.filter-item-group').find('.btn').removeClass('disabled')
		} else {
			$('#languagebox').parents('.filter-item-group').find('.btn').addClass('disabled')
		}
	}

	check_fl_tag_box();

	$(document).on('click', '.delete-tag', function() {
		$(this).parent('.input-tag').remove();
		check_fl_tag_box();
	});

	$(document).on('keyup', '#new_skill, #new_lang', function(e) {
		if (e.keyCode == 13) {
			$(this).before('<div class="input-tag">'+ $(this).val() +'<div class="delete-tag">×</div></div>');
			$(this).val('');
		}
	});

	// Mobile Menu Toggle
	$(document).on('click', '.navbar-toggler, over-layer', function() {
		$('#mob_navbar').toggleClass('active');
	});

	// Fiter Section Open
	// $(document).on('click', '.nav-filter', function() {
	// 	$('#section_filter').css('display', 'block');
	// 	$('#mob_navbar').toggleClass('active');
	// });

	$(document).on('click', '#btn-filter', function() {
		$('#mobile_filter').addClass('open');
	});

	$(document).on('click', '.btn-close-filter', function() {
		$('#mobile_filter').removeClass('open');
	})


	// ============= Project Detail ============== //
	$(document).on('click', '.TabItem', function() {
		$('.TabItem').removeClass('active');
		$(this).addClass('active');
		console.log($(this));
		if ($(this).attr('data-tabItem') == 'details') {
			$('#details').addClass('active');
			$('#proposals').removeClass('active');
		} else {
			$('#details').removeClass('active');
			$('#proposals').addClass('active');
		}
	});

	// ========= btn-add-milestone ============== //
	$(document).on('click', '.btn-add-milestone', function() {
		var milestone = '<div class="MilestoneRequest">'+
						  '<div class="MilestoneRequest-description">'+
							'<input type="text" name="" placeholder="Project milestone">'+
		                  '</div>'+
		                  '<div class="MilestoneRequest-wrapper">'+
		                    '<div class="InputLabel BeforeLabel">$</div>'+
		                    '<div class="MilestoneRequest-amount">'+
		                      '<input type="number" name="" value="20" placeholder="">'+
		                    '</div>'+
		                    '<div class="MilestoneRequest-remove">'+
		                    	'<a class="remove-milestone"><i class="fa fa-times"></i></a>'+
		                    '</div>'+
		                  '</div>'+
		                '</div>';

		$('.MilestoneRequest').after(milestone);
	});

	$(document).on('click', '.remove-milestone', function() {
		$(this).parents('.MilestoneRequest').remove();
	});

	$(document).on('click', '.toggle-more-less', function() {
		if ($(this).text() == "Read More") {
			$(this).text("Read Less");
			// $(this).parents('.Description').find('.Description-text').removeClass('ellipsis');
		} else {
			$(this).text("Read More");
			// $(this).parents('.Description').find('Description-text').addClass('ellipsis');
		}
		$(this).parents('.Description').find('.Description-text').toggleClass('ellipsis');
	})
	
 } );
} )( jQuery );