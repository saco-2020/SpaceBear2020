const Satellite_images=[
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite1.jpg?v=1601783610196",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite2.jpg?v=1601783610393",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite3.jpg?v=1601783613485",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite4.jpg?v=1601783612326",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite5.jpg?v=1601783612050",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite6.jpg?v=1601783611087",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite7.jpg?v=1601783611561",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite8.jpg?v=1601783611040",
  "https://cdn.glitch.com/21cd125c-aa69-4739-9a24-58aec0f5f12b%2FSatellite9.jpg?v=1601783611628"
]

AFRAME.registerComponent('clickable', {
  init: function () {
    this.el.addEventListener('mouseup', function (evt) {
      var satellite_id = this.getAttribute('satellite_id');
      addCollection(satellite_id);
      console.log(document.cookie);

      var message = this.getAttribute('satellite_name') + 'を見つけました！';
      document.getElementById('dialog_wrapper').style.display = 'block';
      document.getElementById('dialog_message').innerHTML = message;
      
      document.getElementById('satellite_image').src = Satellite_images[satellite_id - 0 - 1];
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