
jQuery(function($){



    jQuery("#nav-icon").click(function(e){
      e.preventDefault();
      jQuery("#menu-popup").fadeIn();
    });

    jQuery("#close-nav").click(function(e){
      e.preventDefault();
      jQuery("#menu-popup").fadeOut();
    });



  // $(".iteam-image1 a").tosrus({
  //    pagination : {
  //       add        : true
  //    },
  //    caption    : {
  //       add        : true
  //    }
  // });
  //
  // $(".iteam-image2 a").tosrus({
  //      pagination : {
  //         add        : true
  //      },
  //      caption    : {
  //         add        : true
  //      }
  //   });
  // $(".iteam-image3 a").tosrus({
  //      pagination : {
  //         add        : true
  //      },
  //      caption    : {
  //         add        : true
  //      }
  //   });
  // $(".iteam-image4 a").tosrus({
  //      pagination : {
  //         add        : true
  //      },
  //      caption    : {
  //         add        : true
  //      }
  //   });

});
