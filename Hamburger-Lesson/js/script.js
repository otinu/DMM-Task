$(function() {
  $(".menu-trigger").on("click", function(event) {
    $(this).toggleClass("active"); //クリックされたら、activeクラスが追加・削除される。
    $("#sp-menu").fadeToggle();
    event.preventDefault();
  }); 
});