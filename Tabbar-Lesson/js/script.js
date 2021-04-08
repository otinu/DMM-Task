$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();                //ここで、全コンテンツは一旦hideされる
  $("#tab-menu .active").removeClass("active"); //一番最初はtab1についていたactiveは削除される
  $(this).addClass("active");                   //クリックされたタブにactiveクラスを与える
  $($(this).attr("href")).show();               //1.attrでhref属性を取得する。例えば、#tab2
  event.preventDefault();                         //2..show()により、要素(href属性)を表示する。tab-menuの#tab2の内容のため、tab-contentsのid=tab2の要素が表示される。
});     //event.preventDefault()はaタグの機能を無効にするメソッド。