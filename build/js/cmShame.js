$(function() {
	var aside = $('.aside');
	var asideAlt = $('.asideAlt');
	var divWidth = aside.width();
	var besideAside = $('.besideAside');
	$('.textGrid').find(".four").css("width", "33.3%");
	$('.threeGrid').find(".four").css("width", "33.3%");
	aside.height(divWidth);
	asideAlt.height(divWidth);
	besideAside.height(divWidth);
	besideAside.css("display", "table");
	asideAlt.find('h4').css("margin-top", (asideAlt.height() / 2) + 'px');
	aside.find('h4').css("margin-top", (aside.height() / 2 - 35) + 'px');
	
	var pSize = $('p').css('font-size');
	var pLine = $('p').css('line-height');
	var btnFont = $('readMore a').css('font-size');
	var btnLine = $('readMore a').css('line-height');

	if ($(window).width() < 760) {
	$('.nine').addClass('eleven').removeClass('nine');
	$('p').css('font-size', '1.7em').css('line-height','1.6em');
	$('orangeBtn readMore a').css('font-size','2em').css('line-height','1.6em');
	}else {
			$('p').css('font-size', pSize).css('line-height',pLine);
			$('orangeBtn readMore a').css('font-size', btnFont);
			}
	
	$(window).resize(function() {
		var aside = $('.aside');
		var asideAlt = $('.asideAlt');
		var divWidth = aside.width();
		var besideAside = $('.besideAside');
		aside.height(divWidth);
		asideAlt.height(divWidth);
		besideAside.height(divWidth);
		besideAside.css("display", "table");
		asideAlt.find('h4').css("margin-top", (asideAlt.height() / 2) + 'px');
		aside.find('h4').css("margin-top", (aside.height() / 2 - 35) + 'px');
		
		
		
		
		if ($(window).width() < 760) {
		$('.nine').addClass('eleven').removeClass('nine');
		$('p').css('font-size', '1.7em').css('line-height','1.6em');
		$('orangeBtn readMore a').css('font-size','2em').css('line-height','1.6em');
		}else {
			$('p').css('font-size', pSize).css('line-height',pLine);
			$('orangeBtn readMore a').css('font-size', btnFont).css('line-height',btnLine);
			}
	});
});