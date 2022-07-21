var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var orderCount = document.querySelector(".orderCount");
var btn = document.querySelector(".cartButton");
var productCount = document.querySelector(".productCount");
var cart = document.querySelector(".cart");
var cartInfo = document.querySelector(".cartInfo");
var cartFull = document.querySelector(".cartFull");
var cartMainContent = document.querySelector(".cartMainContent");
var cartCount = document.querySelector(".cartCount");
var totalCost = document.querySelector(".totalCost");
var checkOut =  document.querySelector(".checkOut");
var trash = document.querySelector(".trash");
var count = 0;
var count1 = 0;
console.log(plus);
console.log(minus);

plus.addEventListener("click",function(){
count++;
orderCount.innerHTML = count;
}
);

minus.addEventListener("click",function(){
if(count ===0 || count < 0){
  count=0;
}
else{
  count--;
}
orderCount.innerHTML = count;
}
);



if(orderCount.innerHTML==0){
  productCount.style.display = "none";
}

cart.addEventListener("click",function(){
if(productCount.style.display === "none"){
  cartInfo.classList.toggle("cartDisplay");
  cartFull.style.display ="none";
}
else{
  if(productCount.style.display === "block"){
    cartMainContent.style.display = "none";
    cartFull.style.display ="block";
    cartInfo.classList.toggle("cartDisplay");
    cartCount.innerHTML = count1;
    totalCost.innerHTML = "$"+125 * count1+".00";
}
}
});


  btn.addEventListener("click",function(){
    if(orderCount.innerHTML==0){
      alert("Cart value is 0. Please enter a value!");
    }
    else{
      if(productCount.style.display = "none"){
        productCount.innerHTML = orderCount.innerHTML;
        productCount.style.display = "block";
      }
        if(productCount.style.display = "block"){
          count1 = count1 + count;
          console.log(count1);
          productCount.innerHTML = count1;
        }

        }
        console.log(count);
  })

  checkOut.addEventListener("click", function(){
  alert("items checked out...");
  productCount.style.display="none";
  cartFull.style.display ="none";
  cartMainContent.style.display = "block";
  count1=0;
  })

  trash.addEventListener("click", function(){
  var x = confirm("Are you sure to delete the items in the cart?");
  if(x==true){
  productCount.style.display="none";
  cartFull.style.display ="none";
  cartMainContent.style.display = "block";
  count1=0;
  }
  })
