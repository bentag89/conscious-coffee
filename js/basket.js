const basketProducts = JSON.parse(localStorage.getItem("shoppingList"));
const basketDiv = document.querySelector(".shopping-list");
const totalPrice = document.querySelector(".total");

let total = 0;

basketProducts.forEach(function(basketItem){
    total += parseInt(basketItem.prices.price);
    basketDiv.innerHTML += 
    `<div class = "basket-item">
    <h3 class = "basket-item-name">${basketItem.name}</h3>
    <div  class = "basketimage"><img src = "${basketItem.images[0].src}"></div>
    </div>`
})

totalPrice.innerHTML = `Total: kr${total}`;