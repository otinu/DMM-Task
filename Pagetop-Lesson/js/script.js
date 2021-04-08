$(function(){
  $("#back a").on("click",function(event){
    $("body, html").animate({
      scrollTop:0
    }, 800);
    event.preventDefault(); //実は、あってもなくても見かけにあまり変化はなかった。ただ、システムエラーを起こりにくくするといったことはあるのかも。
  });
});