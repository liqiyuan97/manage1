
$(document).ready(function(){
  $(".b").mouseenter(function(){
    $(this).addClass("font-color1")
  });
  $(".b").mouseleave(function(){
    $(this).removeClass("font-color1")
  });

})


$(document).ready(function(){
  $(".b1").mouseenter(function(){
    $(".a2.a3.a4").animate({opacity:"0"});
    $(".a1").animate({opacity:"1"},500);
  });

  $(".b2").mouseenter(function(){
    $(".a1.a3.a4").animate({opacity:"0"});
    $(".a2").animate({opacity:"1"},500);
  });

  $(".b3").mouseenter(function(){
    $(".a1.a2.a4").animate({opacity:"0"});
    $(".a3").animate({opacity:"1"},500);
  });

  $(".b4").mouseenter(function(){
    $(".a1.a2.a3").animate({opacity:"0"});
    $(".a4").animate({opacity:"1"},500);
  });
})


/*$(document).ready(function(){
    $(".b1").mouseenter(function(){
    $(".a2.a3.a4").animate({opacity:"0"});
    $(".a1").animate({opacity:"1"},500);
  });
})

$(document).ready(function(){
    $(".b2").mouseenter(function(){
    $(".a1.a3.a4").animate({opacity:"0"});
    $(".a2").animate({opacity:"1"},500);
  });
})

$(document).ready(function(){
  $(".b3").mouseenter(function(){
    $(".a1.a2.a4").animate({opacity:"0"});
    $(".a3").animate({opacity:"1"},500);
  });
})

$(document).ready(function(){
  $(".b4").mouseenter(function(){
    $(".a1.a2.a3").animate({opacity:"0"});
    $(".a4").animate({opacity:"1"},500);
  });
})*/


