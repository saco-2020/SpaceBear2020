AFRAME.registerComponent('clickable', {
  init: function () {
    this.el.addEventListener('mouseup', function (evt) {
      addCollection(this.getAttribute('satellite_id'));
      console.log(document.cookie);

      var message = this.getAttribute('satellite_name') + 'を見つけました！';
      document.getElementById('dialog_wrapper').style.display = 'block';
      document.getElementById('dialog_message').innerHTML = message;
    });
  }
});

function addCollection(id) {
  var collection = getCookie('collection');
  
  console.log(collection);
  var ids = collection.split(',');
  
  console.log(ids);
  
  if (ids.indexOf(id) != -1) {
    return;
  }
  
  ids = ids.filter(Boolean);
  ids.push(id);
  
  console.log(ids);
  document.cookie = 'collection=' + ids.join(',');
}