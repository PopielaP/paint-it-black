"use strict";
//const canvas = document.createElement('canvas');
const canvas = document.getElementById('canvas')
//canvas.width = 800
//canvas.height = 500
const context = canvas.getContext('2d');
context.lineWidth = 5;
let down = false;

const draw = function(e){
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  if(down){
    context.lineTo(x,y);
    context.stroke();
  }
  return{x, y};
}

canvas.addEventListener("mousemove", draw);

document.addEventListener("mousedown", function(x,y){
  down = true;
  context.beginPath();
  context.moveTo(x,y);
  canvas.addEventListener("mousemove", draw);
})

document.addEventListener("mouseup", function(){down = false;})

const changeColor = function(color){
  context.strokeStyle = color;
}

const slider = document.getElementById('size');
slider.oninput = function(){
  const sliderValue = slider.value;
  context.lineWidth = sliderValue;
  //return{sliderValue};
  //console.log(sliderValue);
  document.getElementById('sizeInfo').innerHTML = this.value;
}
//console.log("new"+sliderValue);
//document.getElementById('sizeInfo').innerHTML = sliderValue;
const colorPicker = document.getElementById('colorPicker');
colorPicker.oninput = function(){
  context.strokeStyle = colorPicker.value;
}


const saveButton = document.getElementById("savebutton");
const dataUrl = canvas.toDataURL("image/png");
const saveImage = document.getElementById('saveimage');
saveImage.addEventListener('contextmenu', function (event) {
  var dataURL = canvas.toDataURL('image/png');
  mirror.src = dataURL;
});
saveButton.addEventListener('click', function (event) {
    var dataURL = canvas.toDataURL('image/png');
    saveButton.href = dataURL;
});

const clearButton = document.getElementById("clearbutton");
clearButton.addEventListener('click', function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
});
