//Custom JavaScript
$(document).ready(function(){
    "use-strict";

    //sticky header
    function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			$('.fixed-top').addClass("on-scroll").addClass('shadow-lg');
			//$('.scrollspy').addClass('shadow-lg');
		} else {
			$('.fixed-top').removeClass("on-scroll").removeClass('shadow-lg');
			//$('.scrollspy').removeClass('shadow-lg');
		}
	} 
	headerSticky();
	$(window).scroll(headerSticky);
    var Menu=document.getElementById('menu-toggle');
    function menuToggle(){
        $('.sd-button').toggleClass('active');
        $('.nav-menu ul').slideToggle()
    }
    Menu.onclick=function(){menuToggle("slow")};
	
  //Color wheel changer/Theme changer
  $(".colors .column span").click(function(){
    id = $(this).attr('id');
    function colorLink() {
      c = document.getElementById("colors");
      style = "color-" + id + ".css";
      c.href = style;
    };
    colorLink();
  });
  $(".reset").click(function(){
    function colorReset() {
      c = document.getElementById("colors");
      style = "color-blue.css";
      c.href = style;
    };
    colorReset();
  })
	//Custom Scrollspy
	$('body').scrollspy({
		offset:	120,
		target:	'.scrollspy'
	});
    $(window).bind('scroll', function(){
        var currentTop = $(window).scrollTop();
        var elems = $('.section');
        elems.each(function(index){
            var elemTop = $(this).offset().top;
            elemBottom = elemTop + $(this).height();
            var MediaQuery = window.matchMedia('(min-width: 992px');
            if (MediaQuery.matches) {
              current = currentTop + 160
            }else {
              current = currentTop + 200
            }
            if (current >= elemTop && current <= elemBottom){
                var id =$(this).attr('id');
                var navElem = $("[href='#"+id+"']");
                var navElemSib = $("li a").not(navElem);
                navElemSib.removeClass("active");
                navElem.addClass('active');
            }   
        })
    });
    $("#main-content").on("click", function(e){
      e.preventDefault()
      $(".fixed-right").removeClass("active");
      if ($(".sd-button").hasClass("active")) {
        $('.nav-menu ul').slideToggle();
        $(".sd-button").removeClass("active")
      }
    });
    // Nav Scroll
    $('li a').on("click", function(e){
      e.preventDefault()
      var id =$(this).attr('id');
      var Elem = $("[href='#"+id+"']");
      var Sib = $("li a").not(Elem);
      Sib.removeClass("active");
      Elem.addClass('active');
      if ($('#header-global').length){
        navoffset = 160
      }else{
        navoffset = 80
      };
      var offSet = $("section#"+id).offset().top;
      console.log(offSet);
      $('html, body').animate({
        scrollTop : offSet - navoffset
      }, 0);
    });
    $("#conb").on("click", function(e){
      e.preventDefault()
      if ($('#header-global').length){
        navoffset = 160
      }else{
        navoffset = 80
      };
      var offSet = $("section#contact").offset().top;
      console.log(offSet);
      $('html, body').animate({
        scrollTop : offSet - navoffset
      }, 0);
    })
    var color = document.getElementById('color-icon');
    function colorSettings() {
      $('.fixed-right').toggleClass("active");
    };
    color.onclick=function(){colorSettings()};
    var items = document.querySelectorAll(".skills li");
    //Custom modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("yellow");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("clos")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.click = function() {
      modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

  function isElementInViewport(el){
    var rect = el.getBoundingClientRect();
    return(
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function callback() {
    for (var i = 0; i < items.length; i++){
      if (isElementInViewport(items[i])){
        items[i].classList.add("in-view");
      } else{
        items[i].classList.remove("in-view");
      }
    }
  }
  function isScroll(elem) {
    var docv = $(window).scrollTop();
    var docvb = $(window).height();

    var elemv = $(elem).offset().top;
    var elemb = elemv + $(elem).height();

    return ((elemb <= docvb) && (elem >= docv))
  }
  window.addEventListener("scroll", callback);
  window.addEventListener("load", callback);
  window.addEventListener("resize", callback);
  

  $("#ckc").click(function(){
    load=2;
    for(var l = 0; l < load; l++){
    full=361;
    for (var i = 0; i < full; i++){
      console.log(i);
      $(".pload").css("transform", "rotate("+i+"deg)")
    }
    }
  });
  $(".pload").css("transform", "rotate("+i+"deg)")
})