'use strict';
var collectionStr = getCookie('collection');
var collection = collectionStr.split(',');
collection = collection.filter(Boolean); // 空データ除去

for (var i=0; i<collection.length; ++i) {
  var id = collection[i];
  console.log('ID ' + id + ' の何か処理');
  image_on(id)
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



function image_on(id){
    $(".collection-image:eq("+(id-1)+")").attr("src","img/Satellite"+id+".jpg")
}

