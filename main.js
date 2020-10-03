'use strict';

let param =location.search
let value= param.slice(-1)
console.log(value)
function iridium_on(){
    $(".iridium").attr("src","img/Iridium114_satellite.jpg")
}

if(value == 1){
    iridium_on()
}