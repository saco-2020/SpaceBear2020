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
  "地球のオゾン層、空気の質、気候を観測します。オーラはテラ（1999年打上げ）とアクア（2002年打上げ）に続く、地球観測システム（EOS）プロジェクト用の3機目の人工衛星です。2004年7月15日、ヴァンデンバーグ空軍基地からデルタIIロケットによって打ち上げられた。オーラはその他の衛星とA-Trainという衛星コンステレーションを構成しています。",
  "国際宇宙ステーション（ISS）は、地上から約400km上空に建設された巨大な有人実験施設です。1周約90分というスピードで地球の周りを回りながら、実験・研究、地球や天体の観測などを行っています。",
  "ICON (Ionospheric Connection Explorer、Explorer-96) はアメリカ航空宇宙局(NASA)によって2019年に打ち上げられた科学衛星です。宇宙と地球の境界に広がる電離層及び熱圏を観測し、地球大気の気象と大気上層を電離させる太陽由来のエネルギーがこの領域にどのような相互作用を及ぼしているかを研究しています。エクスプローラー計画に含まれる中型探査機シリーズMIDEX(medium-class Explorer)の1機です（MIDEX-8）。",
  "SBC-4はHS-376プラットフォーム上でヒューズ（現在のボーイング）によって設計および製造された静止通信衛星でした。これはSatelliteBusiness Systemsによって注文され、後にHugeesCommunicationsに販売されました。それは持っていたK個のUバンドペイロードを94°W経度で操作しました。",
  "SAC-Aはアルゼンチンの技術衛星です。科学利用衛星S(SAC-A)は、STS-88スペースシャトル・エンデバー号のミッション中に打ち上げられたアルゼンチンの小型で低コストの射出式衛星です。アルゼンチンのCONAEのためにINVAPが製作した実験用地球観測衛星。1998年に打ち上げられました。",
  "ORFEUSは、ガス状の星間雲の研究と同時に、恒星がどのように生まれ、どのように死ぬかの情報を得られるように設計されました。熱い銀河や星間物質の高解像度観測のためのORFEUS望遠鏡が搭載されています。",
  "DOD Pico-Satellite はSTS-116シャトルペイロードベイから放出された国防総省の超小型衛星「ANDE（アンデ）」です。",
  "観測衛星CRISTA-SPASによって地球の中間大気層の調査を行ないました。また、国際宇宙ステーションで日本の実験モジュールに取り付けられる予定のロボットアームのテストも行ないました。",
  "BIRDS-2は、日本、ブータン、フィリピン、マレーシアの4ヵ国が参加し、およそ1年間で、ブータン、フィリピン、マレーシアの各国がそれぞれ1機、計3機の1辺10cmの小型立方体からなるキューブサットと呼ばれる超小型衛星を開発しました。"
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
