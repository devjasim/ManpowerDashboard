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


$(document).ready(function(){
    $(".sideMenuToggler").on("click",function(){
        $(".wrapper").toggleClass("active");
    });
});

