var ajax_form = true;

$( document ).ready(function() { // Document ready

/*-----------------------------------------------------------------------------------*/
/*	01. FADE IN EFFECTS
/*-----------------------------------------------------------------------------------*/
		
		/*
		$('#header .picture').hide();

		$('.fade1').hide().delay(300).fadeIn(1500);
		
		$('.fade2').hide().delay(600).fadeIn(1500);
		
		$('.fade3').hide().delay(900).fadeIn(1500);
		
		$('#header .picture').delay(800).show('fast').animate({'top': 35}, 1500, 'easeOutBack');
			 
		$('#header .picture').css('top', function(){ return $(this).height() });
		*/
		

/*-----------------------------------------------------------------------------------*/
/*	02. Get the CBPSCROLLER
/*-----------------------------------------------------------------------------------*/


		// new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );

			
/*-----------------------------------------------------------------------------------*/
/*	03. SMOOTH SCROLLING ON BUTTON
/*-----------------------------------------------------------------------------------*/
	

$('.button').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash);
    e.preventDefault();
});


/*-----------------------------------------------------------------------------------*/
/*	04. FORM SENDER
/*-----------------------------------------------------------------------------------*/
	

	/* Form Submission */
	/*
	$('form').submit(function() {
		
		var form_data = $(this).serialize();

		if (validateEmail($('input[name=email]').attr('value')))
		{
			
			if (typeof ajax_form !== "undefined" && ajax_form === true)
			{
				
				$.post($(this).attr('action'), form_data, function(data) {
					$('form').show('slow', function() { $(this).after('<div class="clear"></div> <p class="msg-ok">'+ data + '</p>'); });
	  				$('.spam').hide();
	  				$('.msg-ok').delay(300).effect("pulsate", { times:1 }, 1000);
				});
				
				return false;
				
			}
			
		}

		else
		{
			$('p.spam').text('Please enter a valid e-mail').effect("pulsate", { times:3 }, 1000);
			return false;
		}
		
	});
	*/
	
	$('#mc-form').ajaxChimp({
	    url: 'http://springboard.us3.list-manage.com/subscribe/post?u=15f70d0f593034139ae93dc9c&id=f069216284',
	    callback: function(resp) {
		    if (resp.result === 'success') {
		    	$('.spam').html('<p class="msg-ok"><b>Thanks!</b><br/> '+ resp.msg + '</p>');		        
		    } else {
		    	$('.spam').html('<p class="msg-ok">Please enter a valid email address.</p>').effect("pulsate", { times:3 }, 1000);	
		    }
		}
	});	
	
	/*-----------------------------------------------------------------------------------*/
	/*	05. LOCALIZE LANGUAGE
	/*-----------------------------------------------------------------------------------*/	
	
  	var language = window.navigator.userLanguage || window.navigator.language;
  	if (language == 'en-AU' || language == 'en-GB' || language == 'en-NZ' || language == 'en-CA') {
    	$("[data-localize]").localize("./assets/springboard", { language: language });
  	}	


/* Validate E-Mail */

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




});

			
