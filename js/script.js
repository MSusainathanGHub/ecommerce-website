var x = document.querySelectorAll(".list");
var g = document.querySelectorAll(".productGalleryContainer");
var productContainer = document.querySelector(".productImage");
var bimage = document.querySelector(".BlackScreenImage");
var h = document.querySelectorAll(".blackproductGalleryContainer");

console.log(productContainer.getAttribute("src"));
console.log(productContainer);
console.log(g);
var xlen = x.length;
var lineDiv = document.createElement("div");
var y = document.querySelector("#currentLink");
var lineContainer = document.querySelector(".lineContainer");
var topPosition = 109;
for(var i = 0; i < xlen ; i++){
 x[i].addEventListener("mouseover", function() {
     lineDiv.style.position ="absolute";
     lineDiv.style.top = topPosition+"px";
     lineDiv.style.left = this.offsetLeft+"px";
     lineDiv.style.width = this.offsetWidth - 15+"px";
     lineDiv.style.height = "2px";
     lineDiv.style.marginLeft = "15px";
     lineDiv.style.backgroundColor ="orange";
     lineContainer.appendChild(lineDiv);
   });
x[i].addEventListener("mouseout", function() {
  lineDiv.style.backgroundColor = "white";
});
}

var pic = document.querySelectorAll(".galleryImage");
console.log(pic);
var picLen = pic.length;
for(var i = 0; i < picLen; i++){
  pic[i].addEventListener("click", function(event) {
    this.classList.add("overLayEffect");
    console.log(this.src);
    setTimeout(function(){
    event.target.classList.remove("overLayEffect");
  },500);
  productContainer.setAttribute("src",this.src);
});

g[i].addEventListener("click", function(event) {
    this.classList.add("changeImageBorder");
    setTimeout(function(){
    event.target.classList.remove("changeImageBorder");
  },500);
  });
}

var pic1 = document.querySelectorAll(".blackgalleryImage");
console.log(pic1);
var picLen1 = pic1.length;
for(var i = 0; i < picLen1; i++){
  pic1[i].addEventListener("click", function(event) {
    this.classList.add("overLayEffect1");
    console.log(event.target);
    setTimeout(function(){
    event.target.classList.remove("overLayEffect1");
  },500);
  bimage.setAttribute("src",event.target.src);
})
h[i].addEventListener("click", function(event) {
    this.classList.add("changeImageBorder");
    setTimeout(function(){
    event.target.classList.remove("changeImageBorder");
  },500);
  });
}
