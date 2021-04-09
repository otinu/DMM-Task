$(function() {
  $(".menu-trigger").on("click", function(event) {
    $(this).toggleClass("active"); //クリックされたら、activeクラスが追加・削除される。 activeクラスは67～74行目前後に記述あり。
    $("#sp-menu").fadeToggle(500); //第一引数に数字を指定することでフェードする速さが変化する。
    event.preventDefault();
  }); 
});