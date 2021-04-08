$(function (){
  $('.box1').slideDown(1000,function (){         //2秒でIN～OUTのアニメーションが発生
    $('.box1').css({
      'background-color': '#ABABAB',
    }).slideUp(1000);
  });
});

$(function() {
  $(".box2").slideDown(4000);
  $(".box2").css({"background-color" : "#000"}); //4秒でINのアニメーションが発生　⇒ .box1のアニメーションが終了してから2秒で.box2のアニメーションも終了
});