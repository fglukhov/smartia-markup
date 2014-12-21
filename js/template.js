$(document).ready(function() {

	$(".btn-want-to").click(function() {
		if ($("html").scrollTop() > 0 || $("body").scrollTop() > 0) {
			if ($("#searchForm").css("display") == "block") {
				$(".btn-search").click();
			}
			if ($("#userMenu").css("display") == "block") {
				$(".user-menu-toggler").click();
			}
			$("html,body").animate({
				scrollTop:0
			},500,function() {
				handAnimation();
			});
			
		} else {
			var delay = 0;
			if ($("#searchForm").css("display") == "block") {
				$(".btn-search").click();
				delay = 500;
			}
			if ($("#userMenu").css("display") == "block") {
				$(".user-menu-toggler").click();
				delay = 500;
			}
			
			if (handTimeout) {
				clearTimeout(handTimeout)
			}
			
			var handTimeout = setTimeout(function() {
				handAnimation();
			},delay)
			
		}
	})

	
	// Удаление уведомлений
	
	$(".notifications-item .close").click(function() {
		var notification = $(this).parents(".notifications-item");
		notification.slideUp(150,function() {
			// удаление сообщения
			notification.remove();
		})
	});
	
	$(".notifications-remove").click(function() {
		var trigger = $(this);
		var notification = $(".notifications-item");
		notification.slideUp(150,function() {
			// удаление сообщения
			notification.remove();
		});
		trigger.slideUp(150,function() {
			// удаление кнопки
			notification.remove();
		});
	})

	// Переключение баннеров
	
	$(".banners-nav .nav-item").click(function() {
		if (!$(this).hasClass("act")) {
			
			var banners = $(this).parents(".banners").find(".banners-item");
			
			banners.hide().removeClass("act");
			
			banners.eq($(this).prevAll(".nav-item").length).show().addClass("act");
			
			$(this).siblings(".nav-item").removeClass("act");
			$(this).addClass("act");
		
		}
	})
	
	// Переключение баннеров END

	// События пользователя
	
	if ($("#userEventsCarousel").length) {
		$("#userEventsCarousel").carousel({
			interval: false
		})
		
		var uEvRange = $("#userEventsCarousel .range");
		var uEvTotal = $("#userEventsCarousel .total");
		
		uEvFrom = $("#userEventsCarousel .item.active").prevAll(".item").find(".user-events-item").length + 1;
		uEvTo = uEvFrom + $("#userEventsCarousel .item.active").find(".user-events-item").length - 1
		uEvRange.html(uEvFrom + "&ndash;" + uEvTo)
		uEvTotal.html($("#userEventsCarousel .user-events-item").length)
		
		$('#userEventsCarousel').on('slid.bs.carousel', function () {
			uEvFrom = $("#userEventsCarousel .item.active").prevAll(".item").find(".user-events-item").length + 1;
			uEvTo = uEvFrom + $("#userEventsCarousel .item.active").find(".user-events-item").length - 1
			uEvRange.html(uEvFrom + "&ndash;" + uEvTo)
			uEvTotal.html($("#userEventsCarousel .user-events-item").length)
		})
	}
	
	// События пользователя END
	

	$('.main-carousel').carousel()

	$(".user-menu-toggler").click(function() {
		$(this).toggleClass("user-menu-toggler-on")
		if ($(this).hasClass("user-menu-toggler-on")) {
			$(this).find(".text").html("Свернуть")
		} else {
			$(this).find(".text").html("Моё")
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

function handAnimation() {
	var actIndex = 0;
	if (animInt) {
		clearInterval(animInt)
	}
	$(".hand-anim").show();
	var animInt = setInterval(function() {
		if (actIndex < 8){
			$(".hand-anim img").hide();
			$(".hand-anim img").eq(actIndex).show();
			
			if (actIndex == 5) {
				$(".notifications-count").show();
			}
			
			actIndex++;
		} else {
			$(".hand-anim img").hide();
			$(".hand-anim").hide();
			clearInterval(animInt)
		}
	},70)
}