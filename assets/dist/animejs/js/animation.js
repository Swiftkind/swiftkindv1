$(document).ready(function() {
   // Wrap every letter in a span
  // $('.letters').each(function(){
  //   $(this).html($(this).text().replace(/([^\s])/g, "<span class='letter'>$&</span>"));
  // });

  anime.timeline({loop: false})
    .add({
      targets: '.letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 40,
      delay: function(el, i) {
        return 40 * (i+1)
      }
    });

  // anime.timeline({loop:true})
  //   .add({
  //     targets: '.anim',
  //     scaleX: [1, 0],
  //     opacity: [1,0],
  //     easing: "easeOutExpo",
  //     duration: 1000,
  //     delay: 40
  //   })

  // setTimeout(function () {
  //   $('.anim').css('transform-origin', value+"% 50% 0px");
  // }, 1000);
})