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
							$("#"+a).css("opacity","0.8").stop(1000).fadeTo(500,0.3);
						});
					});
				}
			});
			
				$(".home_link").animateOn();
			
			$(".home_link").live("click",function(){
			var id=$(this).attr('id');
			if(id=='ban_img1'){
				$("#mainModal").modal('toggle');
			}
			if(id=='ban_img4'){
				$("#contactModal").modal('toggle');
			}
			if(id=='ban_img2'){
				$("#about-head").fadeOut(500);
				$("#gallery-head").fadeOut(500);
				$("#contact-head").fadeOut(500);
				var t=$(this).attr('data-blah');
				if(t=='hmm'){
					$("#events-head").animate({
					'margin-top': '20px',
					'margin-left': '-245px',
					'width': '0px'
				},500).hide(0);
				$("#icons_sprite").delay(500).fadeIn('slow');
				$("#back_arrow").delay(800).fadeIn(500);
				
				$(t).parent().removeClass();
				}
				
			}
		});
		
			$("#back_arrow").live("click",function(){
				$(this).fadeOut(500);
				$("#icons_sprite").hide();
				$("#about-head").fadeIn(500);
				$("#gallery-head").fadeIn(500);
				$("#events-head").css({'margin-top': '0px','margin-left': '92px','text-align':'center'}).fadeIn(500);
				$("#contact-head").fadeIn(500);
			});
			
			$("#mainModal").on("show",function(){
				$("#blah").hide();
				$("#blah2").fadeIn(500);
			});
			
			$("#contactModal").on("show",function(){
				$("#blah").hide();
				$("#blah2").fadeIn(500);
			});
			
			$("#mainModal").on("hide",function(){
				$("#blah").show();
				$("#blah2").hide();
			});
			
			$("#contactModal").on("hide",function(){
				$("#blah").show();
				$("#blah2").hide();
			});
			
			
			$(".glow_link").mouseenter(function(){
				var id=$(this).attr('id');
				var a=$(this).children(":first").attr('id');
				for(var i=0;i<=10;i++){
					if(a=='icon'+i){
						$("#"+a).stop().fadeTo(500,1.0);
					}
					else{
						$("#icon"+i).stop().fadeTo(200,0.2);
					}
				}
			});
			
			$(".glow_link").mouseleave(function(){
				var id=$(this).attr('id');
				for(var i=0;i<=10;i++){
						$("#icon"+i).stop().fadeTo(500,1.0);
				}
			});
			
			
			$(".glow_link").click(function(){
				var eve=$(this).attr('id');
				var full_event=$(this).attr('data-event');
				display_event(eve,full_event);
				return false;
			});
			
			function show_first(){
			
				$("#ban_img1").delay(200).fadeTo(500,1.0);
				$("#ban_img2").delay(300).fadeTo(500,1.0);
				$("#ban_img3").delay(400).fadeTo(500,1.0);
				$("#ban_img4").delay(500).fadeTo(500,1.0);
				
				$("#ban_img1").delay(900).fadeTo(500,0.3);
				$("#ban_img2").delay(950).fadeTo(500,0.3);
				$("#ban_img3").delay(1000).fadeTo(500,0.3);
				$("#ban_img4").delay(1050).fadeTo(500,0.3);
			}
			
			function display_event(eve,full_event){
				$("#eventsModal").modal('show').hide().animate({
					'margin-top': '10px'
				},500).animate({
					'margin-top': '-300px'
				});
				$("#test_img").html("<div class='"+eve+"'></div><br><center><span style='margin-top: 40px;margin-left: -80px;color: #ccc;'>"+full_event+"</span></center>").hide().fadeIn(500);
			}
			
		});
