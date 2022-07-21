var productImage = document.querySelector(".productImage");
var blackScreen = document.querySelector(".blackScreen");
var bimage = document.querySelector(".BlackScreenImage");
var bimageAll = document.querySelectorAll(".BlackScreenImage");
var bimageLen = bimageAll.length;
var slideRight = document.querySelector(".slideRight");
var slideRightDiv = document.querySelector(".slideRightDiv");
var slideLeft = document.querySelector(".slideLeft");
var slideLeftDiv = document.querySelector(".slideLeftDiv");
var closebtn = document.querySelector(".closebtn");
var bcontainer = document.querySelector(".blackproductGallery");
var h = document.querySelectorAll(".blackproductGalleryContainer");
var pic1 = document.querySelectorAll(".blackgalleryImage");
var cartInfo = document.querySelector(".cartInfo");

productImage.addEventListener("click", function(){
var x = productImage.getAttribute("src");
console.log(x);
bimage.setAttribute("src",x);
blackScreen.style.display="block";
bimage.style.display="block";
closebtn.style.display="block";
for(var i=0; i < 4; i++){
h[i].style.display="block";
pic1[i].style.display="block";
}
slideLeftDiv.style.display="block";
slideLeft.style.display="block";
slideRightDiv.style.display="block";
slideRight.style.display="block";
cartInfo.classList.remove("cartDisplay")
});

closebtn.addEventListener("click", function(){
blackScreen.style.display="none";
bimage.style.display="none";
closebtn.style.display="none";
for(var i=0; i < 4; i++){
h[i].style.display="none";
pic1[i].style.display="none";
}
slideLeftDiv.style.display="none";
slideLeft.style.display="none";
slideRightDiv.style.display="none";
slideRight.style.display="none";
});

slideRightDiv.addEventListener("click",function(){
var x = bimage.getAttribute("src");
console.log(x);
if(x==="images/image-product-1.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-1.jpg")
{
  bimage.setAttribute("src","images/image-product-2.jpg");
}
else if(x==="images/image-product-2.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-2.jpg")
{
  bimage.setAttribute("src","images/image-product-3.jpg");
}
else if(x==="images/image-product-3.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-3.jpg"){
  bimage.setAttribute("src","images/image-product-4.jpg");
}
else if(x==="images/image-product-4.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-4.jpg"){
  bimage.setAttribute("src","images/image-product-1.jpg");
}
})

slideLeft.addEventListener("click",function(){
var x = bimage.getAttribute("src");
console.log(x);
if(x==="images/image-product-1.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-1.jpg")
{
  bimage.setAttribute("src","images/image-product-4.jpg");
}
else if(x==="images/image-product-2.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-2.jpg")
{
  bimage.setAttribute("src","images/image-product-1.jpg");
}
else if(x==="images/image-product-3.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-3.jpg"){
  bimage.setAttribute("src","images/image-product-2.jpg");
}
else if(x==="images/image-product-4.jpg" || x ==="http://127.0.0.1:3000/ecommerce-product-page-main/images/image-product-4.jpg"){
  bimage.setAttribute("src","images/image-product-3.jpg");
}
})
