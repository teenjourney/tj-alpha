
			$(function(){	
				var aside = $('.aside');
				var asideAlt = $('.asideAlt');
				var divWidth = aside.width(); 
				var hero = $('.hero');
				var heroText = $('.heroText');
				var vertAlign = $('.vertAlign');
				var asideHover = $('.asideHover');
				var besideAside = $('.besideAside');

				
			   aside.height(divWidth);
			   asideAlt.height(divWidth);
			
			   besideAside.height(divWidth);
			   besideAside.css("display","table");
			   asideAlt.find('h4').css("margin-top", (asideAlt.height()/2) + 'px');
			   aside.find('h4').css("margin-top", (aside.height()/2-35) + 'px');
			  /*  heroText.css("bottom", (hero.height()/2)); */

	
			$(window).resize(function(){
				var aside = $('.aside');
				var asideAlt = $('.asideAlt');
				var divWidth = aside.width(); 
				var hero = $('.hero');
				var heroText = $('.heroText');
				var vertAlign = $('.vertAlign');
				var asideHover = $('.asideHover');
				var besideAside = $('.besideAside');
				
			   aside.height(divWidth);
			   asideAlt.height(divWidth);
			
			   besideAside.height(divWidth);
			   besideAside.css("display","table");
			   asideAlt.find('h4').css("margin-top", (asideAlt.height()/2) + 'px');
			   aside.find('h4').css("margin-top", (aside.height()/2-35) + 'px');
			  /*  heroText.css("bottom", (hero.height()/2)); */
 
			});
		});
			
