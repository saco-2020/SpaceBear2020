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
    alert('iOS はジャイロが動いていません、ごめんなさい。\nSorry, cannot work by iOS.');
  }
};