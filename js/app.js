
$( ".aboutButton" ).click(function() {
  $( ".aboutApp" ).animate({
    width: "30%",
    opacity: 1,
    fontSize: "120%",
    paddingTop: "5%",
    marginLeft: "1%",
    marginBottom: ".4%"
  }, 1000 );
});

$( ".aboutButton" ).click(function(){
  $(".videoPadding").animate({
    paddingLeft: "2%",
    paddingRight: "2%"
  })
})

$( ".exit" ).click(function(){
  $( ".aboutApp" ).animate({
    width: "0%",
    opacity: 0,
    fontSize: "0em"
  }, 1000 );
});

$(".exit").click(function() {
  $('.videoPadding').animate({
    paddingLeft: "10%",
    paddingRight: "10%"
  }, 1000);
});
