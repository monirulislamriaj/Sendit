$(document).ready(function () {
  "use strict";
  $(window).on("scroll", function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("#mainnavigationBar").addClass("sticky-nav");
    } else {
      $("#mainnavigationBar").removeClass("sticky-nav");
    }
  });
  $('.navbar-toggler').on( 'click', function() {
    var navbar = $('#mainnavigationBar');
    navbar.toggleClass('bg-nav');
  });

  //Copyright Year
  var copyrightYear = document.getElementById('copyrightYear');
  copyrightYear.innerHTML = new Date().getFullYear();
  


  //  AOS Initialize
  AOS.init();

 

  // Background Shape Switches
  TweenMax.fromTo(
    ".switch",
    2,
    { opacity: 1 },
    { opacity: 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-two",
    2,
    { y: 0 },
    { y: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-three",
    2,
    { x: 0 },
    { x: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );

  $(".about-item").matchHeight({
    byRow: 0,
  });


  // $(".galery-item").matchHeight({
  //   byRow: 0,
  // });
 
  // Testimonial slider
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    arrows: true,
    prevArrow:
      `<button type="button" class="slick-prev"><span><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 1.25L10.25 10L1.5 18.75" stroke="#FFBA08" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>
        <svg width="100%" height="100%" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="26.5" stroke="#74767C"/>
        </svg>
      </button>`,
    nextArrow:
      `<button type="button" class="slick-next">
      <span><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 1.25L10.25 10L1.5 18.75" stroke="#FFBA08" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </span>
        <svg width="100%" height="100%" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="26.5" stroke="#74767C"/>
        </svg>
      </button>`,
    // vertical: true,
    // verticalSwiping: true,
    // horizontal: true,
    // horizontalSwiping: true,
   
  });

  //masnary load more option
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.faq-item',
    percentPosition: true
  });
  
// more blog lode
$(function () {
  $("body").on('click touchstart', '.load-more', function (e) {
    e.preventDefault();
    $(".next-blog:hidden").slice(0, 3).slideDown();
    if ($(".next-blog:hidden").length == 0) {
      $(".load-more").css('display', 'none');
    }
  });
});
 
  // Magnific Popup
  $(".popup-vimeo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // counter-up
  $(".counter").counterUp({});
  
 //Show password
 $( ".viewPassword" ).click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
  });
  // Scroll spy style start
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  // Scroll spy
  $(document).ready(function () {
    
    $('body').scrollspy({
        target: "#scrol-nav",
        offset: 20
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#scrol-nav");
        if ($(this).scrollTop() >= 20) {
            navbar.addClass("bg-light").removeClass("bg-transparent");
        } else if ($(this).scrollTop() < 20) {
            navbar.removeClass("bg-light").addClass("bg-transparent");
        }
    }
  });
    //end  Scroll spy style 

 //pricing-two section  filter-price start
 var pricePro = 115;
 var priceBusiness = 340;
 var outputdisbuss = 199;
 var outputdispro = 499;
 
 $(".m2mbtn").on('click', function() {
   $(".m2mbtn").addClass('active');
   $(".annualbtn").removeClass('active');
   pricePro = 115;
   priceBusiness = 340;
   outputdisbuss = 199;
   outputdispro = 499;
   setPrice(pricePro, priceBusiness);
   return false;
 });
 
 $(".annualbtn").on('click',  function() {
   $(".annualbtn").addClass('active');
   $(".m2mbtn").removeClass('active');
   pricePro = 170;
   priceBusiness = 450;
   outputdisbuss = 299;
   outputdispro = 599;
   setPrice(pricePro, priceBusiness);
   return false;
 });
 
 var $s = $('.priceslider').slider({ 
 max: 500,
 min: 10,
 value: 2,
 slide: function(e,ui) {
   var calcpricePro;
   var calcpriceBusiness;
   calcpricePro = (ui.value + pricePro);
   calcpriceBusiness = (ui.value + priceBusiness);
   var outputPro;
   var outputinfo;
   var outputBusiness;
   outputPro = ("$" + calcpricePro + "");
   outputBusiness = ("$" + calcpriceBusiness + "");
 
   outputdispro = ("$" + (calcpricePro + 20) + "");
   outputdisbuss = ("$" + (calcpriceBusiness + 50) + "");
 
   outputinfo = (ui.value);
   
   $('.pricingtable').html(outputPro);
   $('.pricingtable-two').html(outputBusiness);
 
   $('.pricingtabledispro').html(outputdispro);
   $('.pricingtabledisbuss').html(outputdisbuss);
 
   $('.employeenocont-one').html(outputinfo);
 
 }
 });
 
 function setPrice(pricePro, priceBusiness) {
   var calcpricePro;
   var calcpriceBusiness;
   var value=$s.slider("value");
   calcpricePro = (value + pricePro);
   calcpriceBusiness = (value + priceBusiness)
     
   $('.pricingtable').html("$" + calcpricePro + "");
   $('.pricingtable-two').html("$" + calcpriceBusiness + "");
   
   outputdispro = ("$" + (calcpricePro + 20) + "");
   outputdisbuss = ("$" + (calcpriceBusiness + 50) + "");
   outputinfo = (ui.value);
   $('.employeenocont-one').html(outputinfo);
 }
 //pricing-two section  filter-price end
  
 

// COPY TO CLIPBOARD

function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');
  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  }
  else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
  }
}
  $(document).ready(function () {
    $('.js-tooltip').tooltip();
  $('.js-copy').click(function() {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});
  
  // Add active class to the current accordionExample
  var header = document.getElementById("accordionExample");
  var btns = header.getElementsByClassName("accordion-item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("shows");
      current[0].className = current[0].className.replace(" shows", "");
      this.className += " shows";
    });
  }
  var selector = '.accordion-item';

 
});
