

$(document).ready(function(){
	$(".gallery-trigger ul li a").click(function(){
		$(".gallery-trigger ul li a.active").removeClass("active");
		$(this).addClass("active");
	});
});

$(document).ready(function(){
	$(".gallery-trigger a").click(function(){
		$(".gallery-trigger a.active").removeClass("active");
		$(this).addClass("active");
	});
});


$(document).ready(function(){
  var mixer = mixitup('.containers');
  var mixer = mixitup(containerEl);
  	var mixer = mixitup(containerEl, {

		selectors: {
			target: '.menu-restaurant1'
		},
		animation: {
			duration: 300
		},
		classnames: {
			modifierActive: ' active'
		}
	});
});