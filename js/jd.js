  $(document).ready(function(){
    $(".js-1,.overflow").mouseenter(function(){
      $(".area-1").css("overflow","visible");
      $(".js-1").addClass("addclass")
    });
    $(".js-1,.overflow").mouseleave(function(){
      $(".area-1").css("overflow","hidden")
      $(".js-1").removeClass("addclass")
    });
  });


  $(document).ready(function(){
    $("a").mouseenter(function(){
      $(this).addClass("intro")
    });
    $("a").mouseleave(function(){
      $(this).removeClass("intro")
    })
  });

  $(document).ready(function(){
    $(".navbar-p,.overflow2").mouseenter(function(){
      $(this).addClass("font-color2")
      $(".overflow2").css("visibility","visible")
    });
    $(".navbar-p,.overflow2").mouseleave(function(){
      $(this).removeClass("font-color2")
      $(".overflow2").css("visibility","hidden")
    })
  });


$(document).ready(function(){
  $(".uuu").mouseenter(function(){
    $(".overflow4").animate({height: "180px"});
    $(".overflow4").css("display","block");
    $(".ad").animate({top: "-36px"});
  });
  $(".onclick").click(function(){
    $(".overflow4").animate({height: "0px"});
    $(".overflow4").css("display","none");
    $(".overflow3").animate({top: ""});
  });
})