// sidemenu 
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.uniqueMenu');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenuMenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var sideDrop = new Accordion($('#sideDrop'), false);
});

// sidemenu 



// menu resize 
$(document).ready(function(){
    $(".sideMenuToggler").on("click",function(){
        $(".wrapper").toggleClass("active");
    });
});

$(document).ready(function(){
    $(".braNd").on("click",function(){
        $(".navbar").toggleClass("acTive");
    });
});
// menu resize 

// resize menu rotate 
	$(".braNd").on("click", function () {
		$(this).toggleClass("right");
	})
// resize menu rotate 

$(function () {
	$("#datepicker").datepicker({ 
		  autoclose: true, 
		  todayHighlight: true
	}).datepicker('update', new Date());
});