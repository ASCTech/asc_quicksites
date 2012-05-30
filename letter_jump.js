Drupal.behaviors.myModuleBehavior = function (context) {

  $("a.selected").click(function(){
    var letter = $(this).html();
    $(this).css('color', '#990000')
    var firstItem = $("a." + letter).filter(':first');
    var top = firstItem.offset().top;
    $("body,html").animate({scrollTop: top - 75}, 400);
  });

  $("#backtotop").click(function(){
    var top = $('body').top;
    $("body,html").animate({scrollTop: top}, 400);
  });

};
