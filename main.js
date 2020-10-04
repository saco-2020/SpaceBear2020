'use strict';
var collectionStr = getCookie('collection');
var collection = collectionStr.split(',');
collection = collection.filter(Boolean); // 空データ除去

const Satellite_name=["地球観測衛星 オーラ","国際宇宙ステーション (ISS)"]
const Satellite_overview=["地球のオゾン層、空気の質、気候を観測する。オーラはテラ（1999年打上げ）とアクア（2002年打上げ）に続く、地球観測システム（EOS）プロジェクト用の3機目の人工衛星になる。2004年7月15日、ヴァンデンバーグ空軍基地からデルタIIロケットによって打ち上げられた。オーラはその他の衛星とA-Trainという衛星コンステレーションを構成する",
"国際宇宙ステーション（ISS）は、地上から約400km上空に建設された巨大な有人実験施設です。1周約90分というスピードで地球の周りを回りながら、実験・研究、地球や天体の観測などを行っています。"
]

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
  $(".collection-name:eq("+(id-1)+")").text(Satellite_name[id-1])
}

$('.collection-item').on('click',function(){
  $('.popup').addClass('show').fadeIn();
});
$('.popup-btn').on('click',function(){
  $('.popup').fadeOut();
});