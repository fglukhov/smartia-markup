$(document).ready(function() {

	$(".user-menu-toggler").click(function() {
		$(this).toggleClass("user-menu-toggler-on")
		if ($(this).hasClass("user-menu-toggler-on")) {
			$(this).find(".text").html("Свернуть")
		} else {
			$(this).find(".text").html("Мое меню")
		}
	});

	$('input[type="checkbox"],input[type="radio"]').iCheck();

	$(".form-collapsable .form-trigger").click(function() {
		$(this).parents(".form-collapsable").find(".form-content").fadeIn(150);
		$("html,body").css("overflow","hidden")
	})
	
	$(".form-collapsable .close").click(function() {
		$(this).parents(".form-collapsable").find(".form-content").fadeOut(150);
		$("html,body").css("overflow","")
	})
	
	$(".reply-form .form-trigger").click(function() {
		$(this).hide();
		$(this).parents(".reply-form").find(".form-content").fadeIn(150);
		if ($(window).width() < 780) {
			$("html,body").css("overflow","hidden")
		}
	})
	
	$(".reply-form .close").click(function() {
		$(this).parents(".reply-form").find(".form-content").fadeOut(150,function() {
			$(this).parents(".reply-form").find(".form-trigger").show();
		});
		$("html,body").css("overflow","")
	})
	
	$(".answers-trigger").click(function() {
		$(this).parents(".question-answers").find(".answers-content").slideToggle(150);
		$(this).toggleClass("answers-trigger-on")
	});
	
	$(".answers-collapse").click(function() {
		$(this).parents(".question-answers").find(".answers-content").slideToggle(150);
		$(this).parents(".question-answers").find(".answers-trigger").toggleClass("answers-trigger-on")
	});
  
	$('.selectpicker').selectpicker();
	
	$(".col-expandable-trigger").click(function() {
		if ($(this).find(".arr").css("display") == "block") {
			$(this).parents(".block-expandable").find(".col-expandable").slideToggle(250);
			$(this).toggleClass("col-expandable-trigger-on");
		}
	});
	
	$(".footer-menu-trigger").click(function() {
		$(".btn-footer-menu").toggleClass("btn-footer-menu-on");
	});
	
	$(".block-expandable-expanded").each(function() {
		$(this).find(".col-expandable").show();
		$(this).find(".col-expandable-trigger").addClass("col-expandable-trigger-on")
	});
	
	// Toggler
	
	$(".toggler").click(function() {
		if ($(this).data("togglertarget2")) {
			if ($("#"+$(this).data("togglertarget")).css("display") == "none" || $("#"+$(this).data("togglertarget2")).css("display") == "none") {
				$("#"+$(this).data("togglertarget")).slideDown(250);
				$("#"+$(this).data("togglertarget2")).slideDown(250);
			} else {
				$("#"+$(this).data("togglertarget")).slideToggle(250);
				$("#"+$(this).data("togglertarget2")).slideToggle(250);
			}
		} else {
			$("#"+$(this).data("togglertarget")).slideToggle(250);
		}
	});
	
});