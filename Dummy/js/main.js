jQuery(document).ready(function(){

   "use strict"
   $('.container').ripples({
      dropRadius: 13,
      perturbance: 0.01,

    });
    var typed = new Typed('.text', {
    strings: ['<strong>Number Into</strong> <strong class="primary">WORD FORM.</strong>'],
    typeSpeed: 80,
    loop: false,

  });
 });
