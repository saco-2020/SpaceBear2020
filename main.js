'use strict';

let param =location.search
let value= param.slice(-1)
console.log(value)
function iridium_on(){
    $(".iridium").attr("src","img/Iridium114_satellite.jpg")
}

if(value == 1){
    iridium_on()
}

var collectionStr = getCookie('collection');
var collection = collectionStr.split(',');
collection = collection.filter(Boolean); // 空データ除去

for (var i=0; i<collection.length; ++i) {
  var id = collection[i];
  console.log('ID ' + id + ' の何か処理');
}

function getCookie(key) {
  var cookieStr = document.cookie;

  // クエリがない場合は空のオブジェクトを返す
  if (!cookieStr) {
    return "";
  }

  // クエリ文字列を & で分割して処理
  var cookies = cookieStr.split(';');
  
  for (var i=0; cookies.length; ++i) {
    var cookieArr = cookies[i].split('=');

    if (key == cookieArr[0]) {
      return cookieArr[1];
    }
  }

  return "";
}