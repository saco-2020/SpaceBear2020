'use strict';
var collectionStr = getCookie('collection');
var collection = collectionStr.split(',');
collection = collection.filter(Boolean); // 空データ除去

const Satellite_name=[
  "地球観測衛星 オーラ",
  "国際宇宙ステーション (ISS)",
  "ICON",
  "SBS-4 communications satellite",
  "SAC-A satellite",
  "ORFEUS-SPAS",
  "DOD Pico-Satellite",
  "CRISTA-SPAS",
  "BIRDS-2"
]
const Satellite_overview=[
  "地球のオゾン層、空気の質、気候を観測する。オーラはテラ（1999年打上げ）とアクア（2002年打上げ）に続く、地球観測システム（EOS）プロジェクト用の3機目の人工衛星になる。2004年7月15日、ヴァンデンバーグ空軍基地からデルタIIロケットによって打ち上げられた。オーラはその他の衛星とA-Trainという衛星コンステレーションを構成する",
  "国際宇宙ステーション（ISS）は、地上から約400km上空に建設された巨大な有人実験施設です。1周約90分というスピードで地球の周りを回りながら、実験・研究、地球や天体の観測などを行っています。",
  "ICON (Ionospheric Connection Explorer、Explorer-96) はアメリカ航空宇宙局(NASA)によって2019年に打ち上げられた科学衛星。宇宙と地球の境界に広がる電離層及び熱圏を観測し、地球大気の気象と大気上層を電離させる太陽由来のエネルギーがこの領域にどのような相互作用を及ぼしているかを研究する。エクスプローラー計画に含まれる中型探査機シリーズMIDEX(medium-class Explorer)の1機である（MIDEX-8）。",
  "???",
  "???",
  "???",
  "???",
  "観測衛星CRISTA-SPASによって地球の中間大気層の調査を行ないました。また、国際宇宙ステーションで日本の実験モジュールに取り付けられる予定のロボットアームのテストも行ないました。",
  "???"
]

for (var i=0; i<collection.length; ++i) {
  var id = collection[i];
  // console.log('ID ' + id + ' の何か処理');
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
  $(".collection-item:eq("+(id-1)+")").val(id)
}

$('.collection-item').on('click',function(){
  if($(this).val() != 0){
    id = $(this).val()
    $('.popup').addClass('show').fadeIn();
    $(".popup-image").attr("src","img/Satellite"+id+".jpg")
    $(".popup-title").text(Satellite_name[id-1])
    $(".popup-overview").text(Satellite_overview[id-1])
  }
});
$('.popup-btn').on('click',function(){
  $('.popup').fadeOut();
});