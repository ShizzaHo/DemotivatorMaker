let dem = new Demotivator();
selectedCanvas = dem;

window.onload = function() {
    setDevotivatorSize();
    document.getElementById("colorTwo").style.backgroundColor = "#FFFFFF";
}

setInterval(function() {

    selectedCanvas.color1 = document.getElementById("color1").value;
    selectedCanvas.color2 = document.getElementById("color2").value;
    selectedCanvas.textTop = document.getElementById("topText").value;
    selectedCanvas.textBottom = document.getElementById("bottomText").value;
    selectedCanvas.textTopSize = document.getElementById("sizeTop").value;
    selectedCanvas.textBottomSize = document.getElementById("sizeBottom").value;
    selectedCanvas.sizeW = document.getElementById("sizeW").value;
    selectedCanvas.sizeH = document.getElementById("sizeH").value;
    setDevotivatorSize()
    
}, 1000);



let file = document.getElementById("imageSelected");
file.addEventListener("change", function() {

    let fReader = new FileReader();
    fReader.readAsDataURL(file.files[0]);
    fReader.onloadend = function(event){
        document.getElementById("demImage").src = event.target.result;
        selectedCanvas.image = event.target.result;
        document.getElementById("selectedImgText").textContent = file.files[0].name;
    }

}, false);

document.getElementById("color1").addEventListener("input",(event)=>{
    document.getElementById("colorOne").style.backgroundColor = document.getElementById("color1").value;
});

document.getElementById("color2").addEventListener("input",(event)=>{
    document.getElementById("colorTwo").style.backgroundColor = document.getElementById("color2").value;
});

document.getElementById("list")
  .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
});

