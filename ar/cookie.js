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