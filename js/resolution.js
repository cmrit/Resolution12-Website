$(document).ready(function(){
			
			show_first();
			$("#footer_hr1").animate({
				width: '100%'
			},1000).delay(100).fadeOut(300).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
			
			$(".home_link").mouseenter(function(){
				var b=$(this).attr('id');
				my_trans_en(b);
			});
			
			$(".home_link").mouseleave(function(){
				var b=$(this).attr('id');
				my_trans_le(b);
			});
			
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
			
			function my_trans_en(holder){
				$("#"+holder).css("opacity","1").stop(1000).fadeIn(500);
			}
			function my_trans_le(holder){
				$("#"+holder).css("opacity","0.8").stop(1000).fadeOut(800);
			}
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
