function moveTop() {
  var collection = getCookie('collection');
  window.location.href = 'http://54.238.118.117/?collection=' + collection;
}

function closeDialog() {
  document.getElementById('dialog_wrapper').style.display = 'none';
}