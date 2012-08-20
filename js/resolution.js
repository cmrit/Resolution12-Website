$(document).ready(function(){
			
			show_first();
			$("#footer_hr1").animate({
				width: '100%'
			},1000).delay(100).fadeOut(300).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
			
			
			
			$.fn.extend({
				animateOn: function(){
					return this.each(function(){
						var obj=$(this);
						var a=$(this).attr('id')
						obj.mouseenter(function(){
							$("#"+a).css("opacity","1").stop(1000).fadeIn(500);
						});
						obj.mouseleave(function(){
							$("#"+a).css("opacity","0.8").stop(1000).fadeOut(800);
						});
					});
				}
			});
			
				$(".home_link").animateOn();
			
			$(".home_link").click(function(){
			$("#mainModal").modal('toggle');
			});
			
			$("#mainModal").on("show",function(){
				$("#blah").hide();
				$("#blah2").fadeIn(500);
			});
			
			$("#mainModal").on("hide",function(){
				$("#blah").show();
				$("#blah2").hide();
			});
			
			function show_first(){
			
				$("#ban_img1").delay(200).fadeIn(500);
				$("#ban_img2").delay(300).fadeIn(500);
				$("#ban_img3").delay(400).fadeIn(500);
				$("#ban_img4").delay(500).fadeIn(500);
				
				$("#ban_img1").delay(900).fadeOut(500);
				$("#ban_img2").delay(950).fadeOut(500);
				$("#ban_img3").delay(1000).fadeOut(500);
				$("#ban_img4").delay(1050).fadeOut(500);
			}
		});
