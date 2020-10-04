function moveTop() {
  var collection = getCookie('collection');
  window.location.href = 'http://54.238.118.117/?collection=' + collection;
}

function closeDialog() {
  document.getElementById('dialog_wrapper').style.display = 'none';
}

window.onload = function() {
  const isIOS = /iP(hone|(o|a)d)/.test(navigator.userAgent)

  if (isIOS) {
    alert('iOS で動かない場合はカメラの許可を試してみてください。\nSorry, If it doesn\'t work on iOS, try camera permissions.');
  }
};

function deleteCollection() {
  if (confirm('コレクションを削除しますか？')) {
    document.cookie = "collection=; max-age=0";
    alert('コレクションを削除しました')
  }
}