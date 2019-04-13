$(document).ready(function(){
$(this).scrollTop(0);
});
$(function () {
  	$('.navbar-toggle-sidebar').click(function () {
  		$('.navbar-nav').toggleClass('slide-in');
  		$('.side-body').toggleClass('body-slide-in');
  		$('#search').removeClass('in').addClass('collapse').slideUp(200);
  	});

  	$('#search-trigger').click(function () {
  		$('.navbar-nav').removeClass('slide-in');
  		$('.side-body').removeClass('body-slide-in');
  		$('.search-input').focus();
  	});
  }(jQuery));

//------------ functions  to Run on Window Loading
$(window).load(function(){
	 //------------------- Menu on mobile ------------------
	var docHeight = $(document).height();
	$(".dark_overlay").css('height',docHeight);
	
	//--------- General function to use anywhere
	$(".document_height").css('height',docHeight);
	$(".loading_overlay.empty > .padd").css('padding-top',docHeight/5);
	
	//-------Mobile / tablet, giving the posRel the height as the sum of all blocks inside. Same function runs on switching tabs
	if ($(window).width() > 768) {
		//if on desktop, do nothing
		}
	else{
		var outerHeight = 0;
		$(".posRel#cc .block").each(function() {
		  outerHeight += $(this).outerHeight();
		})
		$(".posRel#cc").css('height', outerHeight+50);
	}
	
	//------ Travel Reason
	$(".edit_holder").each(function() {
        var parentHeight = $(this).parent().height();
		
		$(this).css('height',parentHeight);
    });

	//---- 68 Add Recommendations
	var recommendations_introHeight = $(".recommendations_intro").height();
    $(".recommendations_intro .price_analysis").css('height', recommendations_introHeight);
    $(".margin_var").css('margin-bottom',recommendations_introHeight/3)

	//var flight_block = $(".roo_content .flights_col .block");
   // var flight_block_number = flight_block.find(".flight").length;

   // $(flight_block).each(function(){
    	//if($(flight_block_number) = 2){

    		//$(this).css('background','#FF000');
    	//}
    //})
    


	$(".block .choose").each(function(){
		var roo_blockHeight = $(this).parent().height();
		$(this).css('top',roo_blockHeight/2.3);
	})
    
    //--  72_recommended_other_options.html

    var approver_recommendationVar = $(".approver_recommendation");
    approver_recommendationVar.prev().css('margin-bottom','0')
    approver_recommendationVar.prev().css('background','#F2F3F6');
    approver_recommendationVar.prev().find(".floatLeft.width80").css('border-radius','0 0 0 8px');
    if ($(window).width() > 768){
		approver_recommendationVar.prev().find(".floatLeft.width20").css('border-radius','0 0 8px 0')
    }else{
		approver_recommendationVar.prev().find(".floatLeft.width20").css('border-radius','0 0 8px 8px')
		approver_recommendationVar.prev().find(".floatLeft.width80").css('border-radius','0 0 0 0');
    }
	
	
})
 $(document).ready(function() {
	$(".menu_button").click(function(){
			$(this).toggleClass("triggered");
			$(".mobile").toggleClass("opened");
			$(".dark_overlay").toggleClass('show');
		});

	$('.close-popups').click(function(){
      $( ".dialog-message" ).dialog( "close" );
    });
    $( ".dialog-message" ).dialog({
      modal: true,
      height: 'auto',
      minHeight: '0px',
      width:'auto',
      classes: {"ui-dialog": "popups"},
      buttons: {Ok: function() {$( this ).dialog( "close" );}}
    });

})
$(window).resize(function () {
    fluidDialog();
    
});
// catch dialog if opened within a viewport smaller than the dialog width
$(document).on("dialogopen", ".ui-dialog", function (event, ui) {
    fluidDialog();
});
function fluidDialog() {
    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function () {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        // if fluid option == true
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50))  {
                // keep dialog from filling entire screen
                $this.css("max-width", "90%");
            } else {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            //reposition dialog
            dialog.option("position", dialog.options.position);
        }
    });

}

 //-------------------------------------------------------------------------------------------------------------
 //----------------------------------------------List / Grid Views----------------------------------------------
 //-------------------------------------------------------------------------------------------------------------
 $(window).load(function(){
 	//-------------- List view for Approval Workflow
		if($(".blocks.wf").hasClass("listview")){
			//---------- floor height in each lisview template
			$(".listview .block .floor").each(function(){
			var blockHeight = $(this).parent($("block")).height();
			
			$(this).css('height',blockHeight);
			})
		}
		else{
		//do nothing
		}
 })
$(document).ready(function(){
	$(".archivedworkflow .listview").click(function(){
		//-----reset fullheight for logos in Credit Cards listing
		//$(".blocks#cards .fullHeight").each(function() {
			//var fullHeight = $(this).parent().height();
			//$(this).css('height', 'auto');
		//});			
		if($(".blocks").hasClass("listview")){
			//do nothing
			}
		else{
			$(".blocks").removeClass("gridview");
			$(".archivedworkflow .gridview").removeClass("active");
			$(".blocks").addClass("listview");
			$(this).addClass("active");
							
			//---------- floor height in each lisview template
			$(".listview .block .floor").each(function(){
			var blockHeight = $(this).parent($("block")).height();
			
			$(this).css('height',blockHeight);
			});
		}
	})
		
	$(".archivedworkflow .gridview").click(function(){

		if($(".blocks").hasClass("gridview")){
			//do nothing
			}
			else{
				$(".blocks").removeClass("listview");
				$(".archivedworkflow .listview").removeClass("active");
				$(".blocks").addClass("gridview");
				$(this).addClass("active");
				
				//---------- floor height in each lisview template
				$(".block .floor").each(function(){
					$(this).css('height','auto');
							//$(".blocks#cards .fullHeight").each(function() {
								//var fullHeight = $(this).parent().height();
								//$(this).css('height', fullHeight);
							//});	
				});
			}
		})
	$(".btn2.btn-primary").click(function(){
		$(".form-control").val('');
		})
	})



 //-------------------------------------------------------------------------------------------------------------
 //-------------------------------------------------------------------------------------------------------------
 //-------------------------------------------------------------------------------------------------------------
	$(document).ready(function(){
		if($(".blocks").hasClass("listview")){
			$(".blocks#cards .fullHeight").each(function() {
				var fullHeight = $(this).parent().height();
				$(this).css('height', 'auto');
			});	
			}
			else{
			$(".fullHeight").each(function(parentHeight, fullHeightID) {
				var fullHeight = $(this).parent().height();
				$(fullHeightID).css('height', fullHeight);
			});
			}
			
	})

	
	focusedit = function (fieldId, buttonId) {
			$(fieldId).removeAttr('disabled');
			$(fieldId).focus();
	}
	//--------------- Expand / Collapse for Menu on touch screens
	if ($(window).width() < 769){
		$(".clickable").click(function() {
			if($(this).hasClass("on")){
				$(this).children(".sub_menu_holder").slideUp("slow");
				$(this).removeClass("on");				
				}
				else{
			$(".clickable").removeClass("on");
			$(".sub_menu_holder").slideUp();
			$(this).addClass("on");			
			$(this).children(".sub_menu_holder").slideToggle("slow");
			}
		});
	}
	
	//----- Hotel Serach Result
		$(".sort_by_holder ul li").click(function() {
			if($(this).children(".sort_sub").hasClass("on")){
				$(this).children(".sort_sub").removeClass("on");				
				}else{
			$(".sort_sub").removeClass("on");
			$(this).children(".sort_sub").toggleClass("on");
				}
			})
		
	//-------- Column height
	if ($(window).width() < 768) {
			$(".row .column").each(function() {
				$(this).css('height','auto');
			})
		}
		else{
			$(".row .column").each(function() {
				var rowHeight = $(this).parent($(".row")).height();
				$(this).css('height',rowHeight);
			})
		}

	//-------- Padd height inside column for vertical center
	$(".column .padd").each(function(){
		var columnHeihght = $(this).parent($(".column")).height();
		var paddHeight = $(this).height();
		var difference = columnHeihght - paddHeight;
		
		$(this).css('padding-top',difference/2);
		$(this).css('padding-bottom',difference/2);
		
		})

	//-------- Credit Cards Listing view floor height
	$(".floor.second").each(function(){
		if($(".blocks").hasClass("gridview")){
			//do nothing
		}
		else{
		var blockHeight = $(this).parent().height();
		$(this).css('height',blockHeight);
		}
	})


	//------- Cards Tabs Active/Inactive---
	function showtab(btn_id, content_id){
		//----- for content
		$(".blocks").not(content_id).removeClass('opacity1');
		$(".blocks").not(content_id).addClass('opacity00');
		$(".blocks").not(content_id).removeClass('zindex200');
		$(".blocks").not(content_id).addClass('zindex100');
		$(content_id).removeClass('opacity00');
		$(content_id).removeClass('zindex100');
		$(content_id).addClass('opacity1');
		$(content_id).addClass('zindex200');	
		
		//------ for tabs buttons	
		$(".tabs .tab").removeClass("on");
		$(".tabs .tab").addClass("off");
		$(btn_id).removeClass("off");
		$(btn_id).addClass("on")
		
		//-------On swithching between Active and Inactive tabs, Mobile / tablet, giving the posRel the height as the sum of all blocks inside
		if ($(window).width() > 768) {
			//if on desktop, do nothing
			}
		else{
			var outerHeight = 0;
			$(content_id).children(".block").each(function() {
			  outerHeight += $(this).outerHeight();
			})
			$(".posRel#cc").css('height', outerHeight+50);
		}
		}
	//-------- Auto fill Card Code in row 
	$('#card_code').focusout(function(){   
		if($(".cardCode").is(':empty')){
			 var card_code_val = $(this).val();
			 var lastfour = card_code_val.substr(card_code_val.length - 4);
			$('.cardCode').append('<span class="dots"><img src="images/dots.svg"></span><span class="dots"><img src="images/dots.svg"></span><span class="dots"><img src="images/dots.svg"></span>');
			$('.cardCode').append(lastfour);	
			}
		else{
			$(".cardCode").empty();			
			var card_code_val = $(this).val();
			 var lastfour = card_code_val.substr(card_code_val.length - 4);
			$('.cardCode').append('<span class="dots"><img src="images/dots.svg"></span><span class="dots"><img src="images/dots.svg"></span><span class="dots"><img src="images/dots.svg"></span>');
			$('.cardCode').append(lastfour);		
			}		
	}); 
	//-------- Fill logo
	function selectLogo(typeId, logoId) {
		$(".card_type .logo").removeClass("selected");
		$(typeId).addClass("selected");
		
		var logoSrc = $(logoId).attr('src');
		
		$(".card_logo").html('<img src ='+logoSrc+'>')
	};
	//-------- Auto fill Address Line 
		function autofill(fieldId, replaceId){
			if($(replaceId).is(':empty')){
				var field_val = $(fieldId).val();
				$(replaceId).append(field_val);
				}
			else{
				$(replaceId).empty();	
				var field_val = $(fieldId).val();
				$(replaceId).append(field_val);
				}
			}
	//-------- expend collapse
	
	function exp_col(btnID, contentID){		
			$(contentID).slideToggle();
			$(btnID).toggleClass('arrow_up');

				//-------- Credit Cards logos verticall align 
			$(".card_type .logo").each(function() {
				var card_typeHeight = $(".card_type").height();
				var logoHeight = $(this).height();
				var difference = card_typeHeight - logoHeight;
				 
				$(this).css('padding-top',difference/2);
				$(this).css('padding-bottom',difference/2);		
		    })
		}
	
	//----- Expense Types open "Action Menu"
	function open_actions(buttonID, menuID){
			$(buttonID).toggleClass('active');
			$(menuID).toggleClass('show');
			$(".menu_action").not(menuID).removeClass("show");
			$(".btn_action").not(buttonID).removeClass("active");
		}
	//----- Expense Types "Add" holder
	function addhodler(holderID, btnID){
		if($(holderID).hasClass("show")){
			$(holderID).removeClass("show");
			$(btnID).removeClass("tilt");
			}
		else{
			$(".add_holder").removeClass("show");
			$(".title .padd .add").removeClass("tilt");
			$(holderID).toggleClass("show");
			$(btnID).addClass("tilt");
			}
		}
	//-------------------- Hide everything in Expense Types on "esc" button
	window.onkeyup = function (event){
		if(event.keyCode == 27){
			$(".menu_action").removeClass("show");
			$(".btn_action").removeClass("active");
			$(".add_holder").removeClass("show");
			$(".edit_holder").removeClass("show");
			$(".travellers_names").removeClass("on");
			$(".ratings_holder").removeClass("open");
			$(".options_holder").removeClass("open");
			$(".currency_holder").removeClass("close");	
			$(".popup").removeClass("on");
			$(".sort_sub").removeClass("on");
			$(".hotel_details_stage .info_holder").removeClass("show");
			$(".more_details_holder").hide();
			$(".overlay_popup").hide();
			$(".notifications_holder").removeClass('show');
			$(".notifications_overlay").removeClass('show');
			$(".notification_bell").removeClass('on');
			$(".notification_bell_mobile").removeClass('on');
			
		}
	};

	//--------- Exchange rate / clear Manual Input value
	
    function clear_input(inputID){
        inputID.value= "";
    }

	function select_country(rowID){
		$("#exchange_rates .countries .row").removeClass("selected");
		$(rowID).addClass("selected");
	}
	
	$(window).load(function(){
		var countriesHeight = $(".countries").height();
		var rates_detailsHeight = $(".rates_details").height();
		
		if (countriesHeight > rates_detailsHeight){
			$(".rates_details").css('height',countriesHeight);
			}
			else{
				$(".countries").css('height',rates_detailsHeight);
				}
		//------ Assign class .selected to first countries row
		
		$("#exchange_rates .countries .row:first-of-type").addClass("selected");
		
		//-------- Create New Travel Reason "Reference Code" field disabled
		
		$("#ref_code_field").prop( "disabled", true );

			
		//------- fullHeight anywhere -----
		
		$(".fullHeight").each(function() {
		var $fullHeight = $(this).parent().height();
		var $paddHeight = $(this).children($(".padd")).height();
		var $difference = $fullHeight - $paddHeight;
		
		$(this).children($(".padd")).css('padding-top', $difference/2);
		$(this).children($(".padd")).css('padding-bottom', $difference/2);
		
			//-------- special case for fullheight class in Travel Reasons template on Tablets and Mobiles
	if($(window).width() < 768){
		$("#travel_reasons .fullheight").css('background','red');
		}else{
			//do nothing
			}
			

		 });
		 
		 	
	//------ forcing GridView for Labels Listing on Tablet & Mobile
		if ($(window).width() < 600) {
		if($(".blocks#labels").hasClass("listview")){
			$(".blocks#labels").removeClass("listview");
			$(".blocks#labels").addClass("gridview");
			}else{
				//do nothing
				}
		}
		else{
			// do nothing
		}
	})
	//--------------- Travel Reasons open Edit
	function open_edit(btnID, editID){
		if($(editID).hasClass("show")){
			$(holderID).removeClass("show");
			}
		else{
			$(".edit_holder").removeClass("show");
			$(editID).toggleClass("show");
			}
	}
	function close_edit(closeID, editID){
		$(editID).removeClass("show");
		}
	//-------- Create New Travel Reason Info button
	function show_info(btnID, holderID){
			$(holderID).fadeToggle();
		}
	
	function enbale_field(checkboxID, fieldinputID, fieldID){
		if($(checkboxID).attr( "checked" ) && $(checkboxID).prop( "checked" ) && $(checkboxID).is( ":checked" )){
			$(fieldinputID).prop('disabled', false);
			$(fieldID).removeClass('disable_color');
			}
		else{
			$(fieldinputID).prop('disabled', true);
			$(fieldID).addClass('disable_color');
			}
		}

	//------- edit label -----
	function editlabel(edit_btn_ID, link_prof_ID, select_label_ID, color_ID, add_sublable_ID, editbtnID, deletebtnID, cancelID, applyID){
		$(link_prof_ID).removeClass("hide");
		$(link_prof_ID).addClass("show");

		$(select_label_ID).removeClass("hide");
		$(select_label_ID).addClass("show");

		$(color_ID).removeClass("hide");
		$(color_ID).addClass("show");

		$(cancelID).removeClass("hide");
		$(cancelID).addClass("show");

		$(applyID).removeClass("hide");
		$(applyID).addClass("show");
		
		$(add_sublable_ID).removeClass("show");
		$(add_sublable_ID).addClass("hide");
		
		$(editbtnID).removeClass("show");
		$(editbtnID).addClass("hide");
		
		$(deletebtnID).removeClass("show");
		$(deletebtnID).addClass("hide");
		}
	//------- edit label -----
	function cancel_edit(edit_btn_ID, link_prof_ID, select_label_ID, color_ID, add_sublable_ID, editbtnID, deletebtnID, cancelID, applyID){
		$(link_prof_ID).removeClass("show");
		$(link_prof_ID).addClass("hide");

		$(select_label_ID).removeClass("show");
		$(select_label_ID).addClass("hide");

		$(color_ID).removeClass("show");
		$(color_ID).addClass("hide");

		$(cancelID).removeClass("show");
		$(cancelID).addClass("hide");

		$(applyID).removeClass("show");
		$(applyID).addClass("hide");
		
		$(add_sublable_ID).removeClass("hide");
		$(add_sublable_ID).addClass("show");
		
		$(editbtnID).removeClass("hide");
		$(editbtnID).addClass("show");
		
		$(deletebtnID).removeClass("hide");
		$(deletebtnID).addClass("show");
		}	
			
	//------- Search Book Module Tabs ---
	function showContent(btn_id, content_id){
		//----- for content
		$(".sb_module_holder").removeClass('show');
		$(content_id).addClass('show');	
		
		//------ for tabs buttons	
		$(".tabs .tab").removeClass("on");
		$(btn_id).addClass("on")
		
		if($(content_id).find('.dateRangeClass').length>0 && !$(content_id).find('.dateRangeClass').hasClass('rendered_date_range')){
		setTimeout(function(){
			$(content_id).find('.dateRangeClass').dateRangePicker().addClass('rendered_date_range')
		}, 300)
	}
	}
	function subcontent(btn_ID, content_ID){
	$(".subtabs .subtab").removeClass("on");
	$(".sb_module_holder .subContent").removeClass("show");

	$(btn_ID).addClass("on");
	$(content_ID).addClass("show");
	
	if($(content_ID).find('.dateRangeClass').length>0 && !$(content_ID).find('.dateRangeClass').hasClass('rendered_date_range')){
		setTimeout(function(){
			$(content_ID).find('.dateRangeClass').dateRangePicker().addClass('rendered_date_range')
		}, 300)
	}
	}
	function toggleSlide(btn_ID, content_ID){
		$(content_ID).slideToggle();
		$(btn_ID).toggleClass("on");
		}
	function openNames(travellers_input_ID, travellers_names_id){
		if($(travellers_names_id).hasClass("on")){
			$(travellers_names_id).removeClass("on");
			}else{
				$(travellers_names_id).addClass("on");
				}
		}
	
	// ----- Add Flight in Multi-City Search and Book module
	function addflights() {
		var new_flight_section = $('<div class="section add_after_nextFlight"><div class="remove"></div><div class="section_header"><div class="padd">Flight 1</div></div><div class="padd clear"><div class="alert">Please fill the required fields below</div><div><div class="field_holder width48"><label>From</label><div class="input_holder from_airport icon"><input type="text" id="from_aiport_id" placeholder="Enter a city or airport"></div></div><div class="field_holder width48"><label>To</label><div class="input_holder to_airport icon"><input type="text" id="to_airport_id" placeholder="Enter a city or airport"></div></div><div class="field_holder width48"><label>Travel Dates</label><div class="input_holder dates icon"><input id="date-rangeD" size="40" value="" class="dateRangeClass"></div></div><div class="field_holder width24"><label>Class</label><div class="input_holder dropdown"><select><option>Economy</option><option>Premium Economy</option><option>Business</option><option>First Class</option></select></div></div></div></div></div>')
		$('#multicity_cntnt .section.add_after_nextFlight:last').after(new_flight_section);
		$('#multicity_cntnt .section.add_after_nextFlight:last').find('.dateRangeClass').dateRangePicker().addClass('rendered_date_range');
		$(".remove").click(function(){
			$(this).parent().remove();
		})
	};
	
	//------- Select Travellers
	function checkName(li_ID, travellers_names_id, count_ID){
		
			$(li_ID).toggleClass("checked");
			
			var checkedNumber = $(travellers_names_id).find('.checked').length;
			
			$(count_ID).empty();
			
			if($(count_ID).hasClass("travellers_count")){
				$(count_ID).append(checkedNumber, '&nbsp; &nbsp; traveller(s)');
				}
			else if ($(count_ID).hasClass("guests_count")){
				$(count_ID).append(checkedNumber, '&nbsp; &nbsp; guest(s)');
				}
			
		}
	//------- Add Manually Names
	function add_field(addID, manual_holder_ID) {
		
		var new_field = $('<div class="field"><div class="padd"><input id="name_field" autofocus type="text" name="q" placeholder="Select traveller name or employee number" class="inputName"></div><div class="remove"></div></div>')
		$(manual_holder_ID).find('.field:last').after(new_field);		

	};
	
	//---- to avoid closing .travellers_names when focusing on input field, click on +Add or X removing a field. Using "delegate".
	$(document).ready(function(event){
		$(".add_field").click(function(event){
			event.stopPropagation();
			})
		$( ".manual_type" ).delegate( ".remove", "click", function(event) {
			$(this).parent(".field").remove();
			event.stopPropagation();
			} );
		$( ".manual_type" ).delegate( "input", "click", function(event) {
			event.stopPropagation();
			} );
		})	
	//--------- Hotels Search > Advanced Search > Guest Ratings
	function openGuestRatings(input_id, list_id){
		$(list_id).toggleClass("open");
		}
	function checkRating(label_id, padd_id, a_id){

		$(padd_id).toggleClass("checked");
		
		var labelText = $(label_id).text();
		
		if($(a_id).is(':empty')){
			$(a_id).append(labelText, ',&nbsp;');
			}
		else{
			$(a_id).empty();
			}
		//--- Hide or Show "Select number" placeholder
		if($(".ratings_holder .padd").hasClass("checked")){
			$(".a_placeholder").hide();
			}
		else{
			$(".a_placeholder").show();
			}
		}
	/*------------- Search Result ---------*/
	$(document).ready(function(){
		$(".close").click(function(){
			$(".loading_overlay").hide();
			$(".more_details_holder").hide();
			})
		$(".selected_value").click(function(){
			$(".options_holder").toggleClass("open");
			$(".currency_holder").toggleClass("close");			
			})

		})
	
	//-------- Choose Currency in Search Flight Result
	function select_currency(currency_id, holder_id){
		var currencyID = $(currency_id).text();
		$(holder_id).empty();
		$(holder_id).append(currencyID);
		}
//----------Search Result - Filters Column
function open_container(clickID, containerID){
		$(containerID).slideToggle();
		$(clickID).toggleClass("up");

//--------- 31 _SR_Infound.html - If the prices details page is collapsed, move the "selec" blue button up

		if($(containerID).parent('.price_details')){
			if($(containerID).is(':visible')){
				$(".price_details .alignright").toggleClass('marginTop');
				}else{
					//do nothing
				}
		}
		
			//------- fullHeight anywhere -----
		
		$(".fullHeight").each(function() {
		var $fullHeight = $(this).parent().height();
		var $paddHeight = $(this).children($(".padd")).height();
		var $difference = $fullHeight - $paddHeight;
		
		$(this).children($(".padd")).css('padding-top', $difference/2);
		$(this).children($(".padd")).css('padding-bottom', $difference/2);
		})
	}
//------- Outboun & Inboud tab
function out_in(clickID, containerID){
	if($(clickID).hasClass("up")){
		//do nothing
		}
	else{
		$(".bg_grey .container").slideUp();
		$(".filters_col .tabs .tab").removeClass("up");
		$(containerID).slideDown();
		$(clickID).addClass("up");
	}
}

//------- Slide Down tab
function slide_down(containerID){
	if($(containerID).hasClass("up")){
		//do nothing
		}
	else{
		$(".bg_grey .container").slideUp();
		$(".filters_col .tabs .tab").removeClass("up");
		$(containerID).slideDown();
		$(containerID).addClass("up");
	}

}
//------- Slide Up tab
function slide_up(containerID){
	$(containerID).slideUp();
	$(containerID).removeClass("up");

}
//-------- Flight Details - Fare Rules
function open_details_rules(clickID, containerID){
	if($(clickID).hasClass("up")){
		$(".flight_details").slideUp();
		$(".fare_rules").slideUp();
		$(".clickable").removeClass("up");
		}
	else{
		$(".flight_details").slideUp();
		$(".fare_rules").slideUp();
		$(".clickable").removeClass("up");
		$(containerID).slideDown();
		$(clickID).addClass("up");
	}
}

//-------- Flight Details - Sub tabs
function open_sub_tabs(clickID, containerID){
	
	//------ when in the page and not in the popup
	if($(clickID).parent(".header").parent(".fare_rules").hasClass("not_in_popup")){
		if($(clickID).hasClass("on")){
			//do nothing
			}
		else{
			$(".not_in_popup .tab_content").slideUp();
			$(".not_in_popup .tab").removeClass("on");
			$(containerID).slideDown();
			$(clickID).addClass("on");
		}		
	}
	//------ when in the popup and not in the page
	else{
		if($(clickID).hasClass("on")){
			//do nothing
			}
		else{
			$(".popup .tab_content").slideUp();
			$(".popup .tab").removeClass("on");
			$(containerID).slideDown();
			$(clickID).addClass("on");
		}
	}

}
$(document).ready(function(){
	
	$(".popup .fare_rules .close").click(function(){
		$(".popup").removeClass("on");
		})	
	})
	
//--------- Remove tag
function removetag(removeID, tagID){
	$(tagID).hide();
	}
//---------- Insights count
$(window).load(function(){
	var insightsNumber = $(".block.insights .floatLeft").length;	
	var insightsBlockWidth = $(".block.insights").width();
	if($(window).width() > 600 && insightsNumber < 4){
		var widthValue = (insightsBlockWidth / insightsNumber)-2;
		}
	else if ($(window).width() > 600 && insightsNumber > 3){
		var widthValue = (insightsBlockWidth / insightsNumber)-1;
		}
		else if ($(window).width() < 600 && insightsNumber > 3){
			//var widthValue = (insightsBlockWidth / 2);
			}
		else if ($(window).width() < 600 && insightsNumber < 4){
			//var widthValue = (insightsBlockWidth / insightsNumber)-1;
			}
		
	
	$(".block.insights .floatLeft").css('width', widthValue);
	
	//----- give each div the heigh of the highest
	var maxHeight = 0;

	$(".block.insights .floatLeft").each(function(){
	   var thisH = $(this).height();
	   if (thisH > maxHeight) {
		   maxHeight = thisH;
		   $(".block.insights .floatLeft").css('height',maxHeight);
		   }
	});	
	
	//--------- Hotel Details > Specs
	if($(window).width() > 960){
	var specsNumber = $(".specs > div").length;
	var specskWidth = $(".specs").width();
	var specWidth = (specskWidth / specsNumber);
	$(".specs > div").css('width', specWidth);
	}
	
})
//---------- Insights count
$(window).resize(function(){
	var insightsNumber = $(".block.insights .floatLeft").length;	
	var insightsBlockWidth = $(".block.insights").width();
	if($(window).width() > 600 && insightsNumber < 4){
		var widthValue = (insightsBlockWidth / insightsNumber)-2;
		}
	else if ($(window).width() > 600 && insightsNumber > 3){
		var widthValue = (insightsBlockWidth / insightsNumber)-1;
		}
		else if ($(window).width() < 600 && insightsNumber > 3){
			var widthValue = (insightsBlockWidth / 2);
			}
		else if ($(window).width() < 600 && insightsNumber < 4){
			var widthValue = (insightsBlockWidth / insightsNumber)-1;
			}
		
	
	$(".block.insights .floatLeft").css('width', widthValue);
	
	//--------- Hotel Details > Specs
	var specsNumber = $(".specs > div").length;
	var specskWidth = $(".specs").width();
	var specWidth = (specskWidth / specsNumber);
	$(".specs > div").css('width', specWidth);
	
	
	//----- give each div the heigh of the highest
	var maxHeight = 0;

	$(".block.insights .floatLeft").each(function(){
	   var thisH = $(this).height();
	   if (thisH > maxHeight) {
		   maxHeight = thisH;
		   $(".block.insights .floatLeft").css('height',maxHeight);
		   }
	});	
})





$(function(){
	$(".add").click(function(event){
		var newCity = $('<div class="clear mar_bot_15"><div class="floatLeft width85 clear"> <div class="box from_airport"><div class="padd"><input id="departure_airport" placeholder="Beirut International Airport"></div></div><div class="box to_airport"><div class="padd"><input id="arrival_airport" placeholder="Schiphol Airport"></div></div><div class="box date dates dateRangeClass" id="date-rangeA"><div class="padd clear"><div class="floatLeft width100"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="50"><span class="bold fontsize20">11</span></td><td width="2">&nbsp;</td><td><div class="fontsize13">Dec 2017</div><div class="fontsize13">Tuesday</div></td></tr></table></div></div></div><div class="box class"><div class="padd"><select><option>Economic / Coach</option><option>Option 1</option><option>Option 2</option></select></div></div></div><div class="floatLeft width15"><div class="remove">&nbsp;</div></div></div>')
	
		$('.clear.mar_bot_15:last').find('.dateRangeClass').dateRangePicker().addClass('rendered_date_range');
		$('.clear.mar_bot_15:last').after(newCity);
		//------- this is for every time we add a new line 	
		$(".remove").click(function(){
			$(this).parent('.floatLeft').parent('.clear.mar_bot_15').hide();
			})
		})
})
//---------- this is for the 2 default that appears
$(document).ready(function(){
	$(".multicity .remove").click(function(){
		$(this).parent('.floatLeft').parent('.clear.mar_bot_15').hide();
		})
	})
	function open_popup(clickID, popupID, fare_rulesID){
		
		var thisOffset = $(clickID).offset();
		var thisOffsetTop = thisOffset.top;
		var thisDocHeight = $(document).height();
		
		$(popupID).css('height',thisDocHeight);
		$(popupID).toggleClass('on');
		$(fare_rulesID).css('margin-top',thisOffsetTop-400);
		}

function showallfunction(btnID, holderID){
	$(holderID).slideToggle();
	    if (btnID.innerHTML === "+ Show All"|| btnID.innerHTML === "Show All" ) {
        btnID.innerHTML = "- Hide All";
    } else {
        btnID.innerHTML = "+ Show All";
    }
	}


//---------- Hotel Search result
function switchView(buttonID){
	$(".view").removeClass("on");
	$(buttonID).addClass("on");
	}
//---------- Hotel Search result Tabs
function open_tab(btnID, containerID){
		$(".hotel_details_stage .tabs .tab").removeClass("on");
		$(".hotel_details_stage .tabs_content .container").hide();
		$(containerID).show();
		$(btnID).addClass("on");
	}
//---------- Hotel Search result Tabs > Price information
function showinfo(info_btnID, informationID){
	if($(informationID).hasClass("show")){
		$(informationID).removeClass("show");
		}else{
		$(".info_holder").removeClass("show");
		$(informationID).addClass("show");
		}
		fullHeight();
	}
//-------------------- Open "More Details" overlay
function open_moredetails(btnID, overlayID){
	var documentHeight = $(document).height();
	$(overlayID).css('height',documentHeight);
	$(overlayID).css('display','block');	
	}

function fullHeight	(){
	$(".fullHeight").each(function() {
		var $fullHeight = $(this).parent().height();
		var $paddHeight = $(this).children($(".padd")).height();
		var $difference = $fullHeight - $paddHeight;
		
		$(this).css('height', $fullHeight);
		$(this).children($(".padd")).css('padding-top', $difference/2);
		$(this).children($(".padd")).css('padding-bottom', $difference/2);
		//console.log("working");
		})
}

//---------- this is for the 2 default that appears
$(document).ready(function(){
	$(".flights_col .close").click(function(){
		$(this).parent().slideUp();
		$(".flights_col .clickable").removeClass("up");
		})
	//-----68 Add Recommendation - Blue Check
	$(".roo_content .choose").click(function(){
		$(this).toggleClass("on");
	});

	//-----39_Approve Similar Trips - Blue Check
	$(".approveRejectHolder .choose").click(function(){
		$(this).toggleClass("on");
	});
	$(".accTitle .arrow_accordion").click(function(){
		$(this).closest($(".itemHolder")).find($(".accContent")).slideToggle();
		$(this).toggleClass("active");
	});

	//-----38_Car View Recommendations Edit Recommendations by-Second Approver View details
	$(".has_choose_block .choose").click(function(){
		$(this).toggleClass("on");
	});
})

//------------ Map - Open Overlay----------
function open_overlay(btnID, overlayID, big_popupID){
	$(btnID).css('display','none');
	$(overlayID).css('display','block');
}
//---------- Map - Close overlay --------->
$(document).ready(function(){
	$(".close_map").click(function(){
		$(".overlay_popup").css('display','none');
		$(".big_map_holder").css('display','none');
		})
	})
$(window).load(function(){
	var documentHeight = $(document).height();
	$(".big_map_holder").css('height', documentHeight);
	$(".big_map").css('height', documentHeight);
})
function open_bigMap(btnID, big_map_holder_ID){
	var documentHeight = $(document).height();
	$(big_map_holder_ID).css('height', documentHeight);
	$(big_map_holder_ID).css('display', 'block');
}
function open_small_popup(btnID, small_popup_ID){
	$(small_popup_ID).css('display','block');
}
function change_environment(tabID, environmentID){
	if($(tabID).hasClass("on")){
		//do nothing
	}
	else{
		$(tabID).siblings().removeClass("on");
		$(tabID).addClass("on");
		$(environmentID).siblings().removeClass("show");
		$(environmentID).addClass("show");
	}
}


//-----60_Dashboard-----

function pending_processed(btn_ID, content_ID){
	$(".pending_processed_tabs .tab").removeClass("on");
	$(".trips_holder").removeClass("show");
	$(btn_ID).addClass("on");
	$(content_ID).addClass("show");
}
function show_notifications(holderID, overlayID, buttonID){
	$(holderID).toggleClass('show');
	$(overlayID).toggleClass('show');
	$(buttonID).toggleClass('on');
}
function close_notifications(holderID, overlayID, buttonID){
	$(holderID).removeClass('show');
	$(overlayID).removeClass('show');
	$(buttonID).removeClass('on');
}
function show_policy(btnID, detailsID){
	$("#summary_policy .row.clickable").removeClass("on");
	$("#summary_policy .details").removeClass("show");
	$(btnID).addClass("on");
	$(detailsID).addClass("show");
}
function sima(btnID, detailsID){

	if ($(window).width() > 769) {
	setTimeout(function() {fullHeight()}, 10);
	}

	$(".trpdtls_tabs .tab").removeClass("on");
	$(".trpdtls_content").removeClass("show");
	$(btnID).addClass("on");
	$(detailsID).addClass("show");

	if($(detailsID+" .button_notification").length>0)
	{
		$(detailsID+" .button_notification").fadeIn();
	}

	
}

function expand_collapse(btnID, blockID){
	$(btnID).toggleClass("up");
	$(blockID).slideToggle();
}
function show_hide(btnID, blockID){
	$(blockID).toggleClass("show");
}
//function detailed_view(btnID, viewID){

//var docHeight = $(document).height();
//$(viewID).css('height',docHeight);
//setTimeout(function() {
	//$(viewID).addClass("top0");
	//}, 10);

//if ($(window).width() > 769) {
	//setTimeout(function() {
		//fullHeight();
		//$(viewID).addClass("top0");
	//}, 10);
	//}
	
	//$(viewID).css('display','block');
//}
function quit(btnID, contentID){
	$(contentID).css('display','none');
	$(contentID).removeClass('top0');
}
function show_c_g_m(btnID, contentID){
	if($(btnID).hasClass("on")){
		$(".head .c_g_m span").removeClass("on");
		$(".c_g_m_content").removeClass("show");
		$(".defaultview").removeClass("hide");
		setTimeout(function() {
		fullHeight();
		}, 10);
	}else{
	$(".defaultview").addClass("hide");
	$(".head .c_g_m span").removeClass("on");
	$(".c_g_m_content").removeClass("show");
	$(btnID).addClass("on");
	$(contentID).addClass("show");
	}
}
//----- Itinerary change from Flights to Hotels to Cars
function change_itinerary_env(btnID, listID, contentID){
	$(".defaultview").removeClass("hide");
	$(".it_right_col").removeClass("show");
	$("#itinerary_content .it_left_col .list").removeClass("on");
	$("#itinerary_content .it_left_col .list .padd").removeClass("on");
	$(btnID).addClass("on");
	$(listID).addClass("on");
	$(contentID).addClass("show");
	if($(contentID).has('.button_notification'))
	{
		$('.button_notification').css({'opacity':'1'});
		setTimeout(function(){ $('.button_notification').css({'opacity':'0'}); }, 10000);
	}
	setTimeout(function() {
		fullHeight();
	})
}

function change_history_log_env(listID, contentID){
	$(".defaultview").removeClass("hide");
	$(".it_right_col").removeClass("show");
	$("#itinerary_content .it_left_col .list").removeClass("on");
	$("#itinerary_content .it_left_col .list .padd").removeClass("on");
	$(listID).addClass("on");
	$(contentID).addClass("show");
	if($(contentID).has('.button_notification'))
	{
		$('.button_notification').css({'opacity':'1'});
		setTimeout(function(){ $('.button_notification').css({'opacity':'0'}); }, 10000);
	}
	setTimeout(function() {
		fullHeight();
	})
}

//SIDEBAR DRAWERS
function validate()
  {
  		if($('#loyalty_card_checkbox:checked').length==0)
		{
				$(".sidebar_drawer_container").addClass("error");
		}
		else{
			$(".sidebar_drawer_container").removeClass("error");
		}

  }
function close_drawer()
{
	$('.sidebar_drawer').removeClass('show');
}
function open_sidebar_drawer(btn_ID, content_ID){
	$(content_ID).addClass("show");
}
function close_sidebar_drawer(content_ID)
{
	$(content_ID).removeClass("show");
}

//-------- Itinerary Details
function open_it_details_rules(clickID, containerID){
	if($(clickID).hasClass("up")){
		$(".flight_details").slideUp();
		$(".fare_rules").slideUp();
		$(".clickable").removeClass("up");
		}
	else{
		$(".flight_details").slideUp();
		$(".fare_rules").slideUp();
		$(".clickable").removeClass("up");
		$(containerID).slideDown();
		$(clickID).addClass("up");
	}
}
function show_recommendations(btnID, contentID){
	if($(btnID).hasClass("on")){
		//do nothing		
	}else{
		$(".roo_content").removeClass("show");
		$(".options_tabs .option").removeClass("on");

		$(contentID).addClass("show");
		$(btnID).addClass("on");
		setTimeout(function() {fullHeight();},50);
		setTimeout(
			function(){
				$(".block .choose").each(function(){
				var roo_blockHeight = $(this).parent().height();
				$(this).css('top',roo_blockHeight/2.3);
			})
			})
	}
}