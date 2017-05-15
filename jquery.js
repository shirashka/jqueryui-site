//JQuery Stylesheet for Assignment 7- Jquery UI


/* Accordion jQuery UI: */
$(document).ready(function(){
	$( function() {
		$( "#accordion" ).accordion({ collapsible: true
		});
		$( ".selector" ).accordion({ active: false
		});
	});

/* Tabs jQuery UI: */	
	$( function() {
    $( "#tabs" ).tabs();
  } );

/* Change Class jQuery UI: */  
  $( function() {
    $( "#changeText" ).on( "mouseover", function() {
      $( ".contact-link" ).switchClass( "contact-link", "newEffect", 1000 );
  });
  });
  
/* Autocomplete jQuery UI: */
$( function() {
    var availableTags = [
      "Alabama",
	  "Alaska",
	  "Arizona",
	  "Arkansas",
	  "California",
	  "Colorodo",
	  "Connecticut",
	  "Delaware",
	  "Florida",
	  "Georgia",
	  "Hawaii",
	  "Idaho"
    ];
    $( "#state" ).autocomplete({
      source: availableTags
    });
  });
  
   $( function() {
    $( "#star" ).draggable();
  });
 
});
