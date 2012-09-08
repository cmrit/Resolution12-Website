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
			if(id=='ban_img3'){
				$("#registerModal").modal('show');
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
			
			$("#no_students").live("change",function(){
				var no_stu=$(this).val();
				$("#student_name_fields").html('');
				for(var i=1;i<=no_stu;i++){
					$("#student_name_fields").append("<label class='control-label' for='inputPassword'>Student "+i+": </label><div class='controls'><input type='text' name='students[]' id='student["+i+"]' placeholder='Student Name'></div>");
				}
				$("#student_name_fields").fadeIn(500);
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
			
			var msg="";
			
			$("#college_name").live("change",function(){
				if ($(this).attr('data-source').indexOf($(this).val()) > -1) {
					$("#no_college").fadeOut(500);
					$("#student_name_fields").html('').fadeOut(500)
					$("#students_block").fadeIn(500);
					$("#register_btn").attr("disabled",false);
					msg='';
				}
				else{
					msg='Your college not in the list? <a href="mailto:resolution.cmrit@gmail.com" target="_BLANK">Mail Us!</a>';
					$("#students_block").fadeOut(500);
					$("#register_btn").attr("disabled",true);
				}
				get_attendees();
				$("#no_college").html(msg).fadeIn(500);
				return false;
			});
			
			function get_attendees(){
				$.post("json/json.attendees.php",{college: $("#college_name").val()},
				function(data){
					$("#attendees").html('');
					var obj=jQuery.parseJSON(data);
					var names="";
					for(var i=0;i<obj.length;i++){
						names=names+obj[i].name+", ";
					}
					names=names.substring(0,names.length-2);
					if(names!=='')
						$("#attendees").html("Attendees: "+names).hide().fadeIn(500);
				});
			}
			
			$("#register_form").submit(function(){
				event.preventDefault();
			});
			
			setInterval(function() {
			$('#news_updates > p:first').delay(800).fadeIn(800).next().fadeOut(800).end().appendTo('#news_updates');
			},6000);
			
			$(".single_icon").live("mouseenter",function(){
				var id=$(this).attr('id');
				console.log(id);
				for(var i=1;i<=3;i++){
					if(id=='social'+i){
						$("#social"+id).stop().fadeTo(500,1.0);
					}
					else{
						$("#social"+i).stop().fadeTo(500,0.3);
					}
				}
			});
			
			$(".single_icon").live("mouseleave",function(){
				for(var i=1;i<=3;i++){
						$("#social"+i).stop().fadeTo(500,1.0);
				}
			});
			
			$("#register_btn").live("click",function(){
				var college_name=$("#college_name").val();
				if(college_name==''){
					$("#college_name").focus();
				}
				else{
					$("#register_form").ajaxForm({
						dataType: 'json',
						success: function(data){
							if(data.status){
								get_attendees();
								$("#student_name_fields").html('').fadeOut(500)
								$("#register_form")[0].reset();
							}
							else{
								$("#js_messages").html('<span class="alert alert-danger span6" style="margin-top: -10px;"><button type="button" class="close" data-dismiss="alert">&times;</button><center>There was an error, make sure all details are filled</center></span>').fadeIn(500);
							}
						},
						error: function(err){
							console.log(err);
						}
					}).submit();
				}
				event.preventDefault();
				return false;
			});
			
			
			$("#rules_link").live("click",function(){
				$(this).hide()
				$("#register_heading").html('General Rules').hide().fadeIn(500);
				$("#back_link").fadeIn(500);
				$("#register_form").hide();
				$("#register_btn").hide();
				$("#general_rules").fadeIn(500);
			});
			
			$("#back_link").live("click",function(){
				$(this).hide()
				$("#register_heading").html('Registration').hide().fadeIn(500);
				$("#rules_link").fadeIn(500);
				$("#register_form").fadeIn(500);
				$("#register_btn").fadeIn(500);
				$("#general_rules").hide();
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
				$("#events_body_span").hide();
				switch(eve)
				{
					case  "ice" :
			   $("#events_body").html("<h3 class='rules_text'> Rules: </h3><p>*	This is the Ice Breaker event<br>* Colleges aiming for overall trophy must take part<br>* All participants of the college must be involved<br>* Props not allowed<br>*  Any kind of vulgarity will lead to disqualification<br>* Time limit : 4 + 1 minutes<br><br>Start Time: 10:00 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Namita : +91 9902 76 5929</p>").hide().fadeIn(500); break;
					case  "web" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p>* Max. 2 teams per college and 2 members per team<br>* Prelims : [30 mins]<br>- Basic HTML and CSS should be used<br>- Question is given on spot<br>- Coding should be done in Notepad<br>* Finals : [1hr 15mins]<br>- Html, CSS, Javascript should be used<br>- Question and Images are given on spot<br>- Dreamweaver CS5, GIMP, Photoshop CS5	and jQuery library are provided<br>* Use of Internet and any kind of storage devices is not allowed<br>* Decision of the judge is considered to be final<br><br>Start Time: 11:00 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Arun 			 	 : +91 9738 08 0932 <br>Karthik S M	 : +91 9986 62 7349</p>").hide().fadeIn(500); break;
					case  "coding" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p>* Max. 2 teams per college and 2 members per team<br>* Prelims :<br>	- 40 mins time limit, 30 Questions<br>* Finals : <br>	- 1 hour time limit, 3 or 4 Questions<br>* Decision of the judge is considered to be final<br><br>Start Time: 11:30 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Suprith     : 	+91 9964 04 4174<br>Obaidulla : +91 9886 38 2484</p>").hide().fadeIn(500); break;
					case  "photo" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p> * Max. 2 teams per college and 1 member per team<br>* Any camera above 2 Mega pixels can be used<br>* Themes are provided on spot<br>* 3 pics should be submitted on the theme selected<br>* Only Brightness and contrast can be adjusted, no effects should be added<br>* Pics can be submitted either in a CD or a Pen Drive<br>* Decision of the judge is considered to be final<br><br>Start Time: 11:30 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Tiju    : +91 9986 43 6068<br>Rahul : +91 8147 75 3238</p>").hide().fadeIn(500); break;
					case  "treasure" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p> * Max. 2 teams per college and 2 members per team<br>* Event will be of one round<br>* Treasure hunt within the computer<br>* 45 mins time limit<br>* Decision of the judge is considered to be final<br><br>Start Time: 12:00 PM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Ramakrishna : +91 9538 11 4711<br>Manjunath	: +91 8867 45 3679 </p>").hide().fadeIn(500); break;
					case  "it" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p> * Max. 2 participants per college<br>* Event will be of 4 rounds<br>* Round 1 : Pick 'n' Speak<br>* Round 2 : Creative Writing<br>* Round 3 : Group Discussion<br>* Round 4 : Stress Interview<br>* Decision of the judge is considered to be final<br><br>Start Time: 11:30 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Naveen : +91 9036 95 1203<br>Jisha	  	:  +91 9964 09 0096</p>").hide().fadeIn(500); break;
					case  "paper" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p> * Max. 2 teams per college and 2 members per team<br>* Topic of your own choice(open source preferred) <br>* Soft Copy of papers should be sent by E-mail<br>* An acknowledgement mail will be sent if the paper is selected<br>* The ppt's should also be sent by E-mail on or before the event date<br>* Decision of the judge is considered to be final<br>E-mail : resolution.cmrit@gmail.com<br><br>Start Time: 10:00 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Supreetha : +91 9901 62 9093<br>Madhuri    : +91 9845 72 9775</p>").hide().fadeIn(500); break;
					case  "gaming" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p> * NFS Most Wanted :<br>	- 5 teams per college, 1 member per team<br>	- Knock-out Match<br><br>* Counter Strike : <br>- 1 team per college and 4 members per team<br>- Knock-out Match<br><br>* Decision of the judge is considered to be final<br><br>Start Time: 01:00 PM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Ujwal (CS)		 	: +91 9686 62 0314<br>Deanish (NFS)	: +91 8904 29 5861</p>").hide().fadeIn(500); break;
					case  "dumb" :
					$("#events_body").html("<p> * Max. 2 teams per college and 3 members per team<br>* Event will be of 3 rounds<br>* Round 1 : Prelims<br>* Round 2 : Semi Finals<br>* Round 3 : Finals<br>* All Dumb Charades rules apply (No Word splitting, no lip movement etc)<br>* Decision of the judge is considered 	to be final<br><br>Start Time: 01:00 PM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Shashank   	: +91 9686 24 7855<br>Jijo : +91 7795 34 9802</p>").hide().fadeIn(500); break;
					case  "quiz" :
					$("#events_body").html("<h3 class='rules_text'> Rules: </h3><p> * Max. 3 teams per college and 2 members per team<br>* Round 1: Written (Prelims)<br>* Round 2: Stage Event (Finals)<br>* Tie-Breaker to resolve a tie<br>* Use of laptops, mobiles or other electronic devices is strictly prohibited<br>* Decision of the Quiz Master is considered to be final<br><br>Start Time: 11:15 AM<hr><h4 class='rules_text'>Student Co-ordinators: </h4>Krishna    : +91 8904 85 3975<br>Karthik R  : +91 7259 70 4449</p>").hide().fadeIn(500); break;
			   }
			}
			
		});
