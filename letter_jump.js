Drupal.behaviors.myModuleBehavior = function (context) {

  $("a").click(function(){
    var letter = this.html();
    var firstItem = $("a." + letter).filter(':first');
    var top = firstItem.offset().top;
    $("body,html").animate({scrollTop: top}, 800);
  });

};