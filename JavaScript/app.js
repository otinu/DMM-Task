var i;
var count;
var num = 0;

for(i = 1; i < 100; i++){
  if (i % 3 == 0) {
    num = num + i;
    count = count + 1;
  }
  return count;
}

alert("結果は" + num + "です。" + "加算は" + count + "回繰り返し行われました。");






