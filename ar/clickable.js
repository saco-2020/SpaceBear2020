AFRAME.registerComponent('clickable', {
  init: function () {
    this.el.addEventListener('mouseup', function (evt) {
      alert(this.getAttribute('id') + 'を見つけました！');
    });
  }
});