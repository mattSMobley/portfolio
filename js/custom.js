/** 
  * Template Name: Snap Studio
  * Version: 1.0  
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  
  1. MENU
  2. TOSRUS POPUP SLIDER (INTEGRATED PORTFOLIO SECTION)  
  
**/

jQuery(function($){


  /* ----------------------------------------------------------- */
  /*  1. MENU
  /* ----------------------------------------------------------- */
      
    jQuery("#nav-icon").click(function(e){
      e.preventDefault();
      jQuery("#menu-popup").fadeIn();
    });

    jQuery("#close-nav").click(function(e){
      e.preventDefault();
      jQuery("#menu-popup").fadeOut();
    });
 
  /* ----------------------------------------------------------- */
  /*  2. TOSRUS POPUP SLIDER (INTEGRATED PORTFOLIO SECTION)
  /* ----------------------------------------------------------- */  
  
  $(".iteam-image1 a").tosrus({
     pagination : {
        add        : true
     },
     caption    : {
        add        : true
     }
  });
  
  $(".iteam-image2 a").tosrus({
       pagination : {
          add        : true
       },
       caption    : {
          add        : true
       }
    });
  $(".iteam-image3 a").tosrus({
       pagination : {
          add        : true
       },
       caption    : {
          add        : true
       }
    });
  $(".iteam-image4 a").tosrus({
       pagination : {
          add        : true
       },
       caption    : {
          add        : true
       }
    });
  
});

