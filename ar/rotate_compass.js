AFRAME.registerComponent("rotate-this-with-the-compass-readings", {
  init: function() {
    // コンパスの値に合わせてカメラの向きを調整する
    // window.addEventListener('deviceorientation', deviceOrientationFunc);
  }
});

function deviceOrientationFunc(e) {
  var str   = '',
      alpha = e.alpha,
      beta  = e.beta,
      gamma = e.gamma;

  str  = 'alpha = ' + alpha + '\n';
  str += 'beta = '  + beta + '\n';
  str += 'gamma = ' + gamma + '\n';

  var compass = compassHeading(alpha, beta, gamma);
  document.querySelector('#camera-entity').object3D.rotation.y = THREE.Math.degToRad(-compass);
  window.removeEventListener('deviceorientation', deviceOrientationFunc);
}

function compassHeading(alpha, beta, gamma) {
  var degtorad = Math.PI / 180; // Degree-to-Radian conversion

  var _x = beta ? beta * degtorad : 0; // beta value
  var _y = gamma ? gamma * degtorad : 0; // gamma value
  var _z = alpha ? alpha * degtorad : 0; // alpha value

  var cX = Math.cos(_x);
  var cY = Math.cos(_y);
  var cZ = Math.cos(_z);
  var sX = Math.sin(_x);
  var sY = Math.sin(_y);
  var sZ = Math.sin(_z);

  // Calculate Vx and Vy components
  var Vx = -cZ * sY - sZ * sX * cY;
  var Vy = -sZ * sY + cZ * sX * cY;

  // Calculate compass heading
  var compassHeading = Math.atan(Vx / Vy);

  // Convert compass heading to use whole unit circle
  if (Vy < 0) {
    compassHeading += Math.PI;
  } else if (Vx < 0) {
    compassHeading += 2 * Math.PI;
  }

  return compassHeading * ( 180 / Math.PI ); // Compass Heading (in degrees)
}
