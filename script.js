const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 3400);
});

function DarkMode() {
  let icon = document.getElementById("toggleDark");
  let body = document.body;
  icon.classList.toggle("bi-moon");

  if (icon.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundColor = "#dad7cd";
    document.getElementById("header").style.backgroundColor = "#264653";
    document.getElementById("footer").style.backgroundColor = " #264653";
    document.getElementById("cart").style.backgroundColor = "#ececec";
    document.getElementById("X").style.color = "#264653";
    document.getElementById("yc").style.color = " #264653";
    document.getElementById("pr").style.color = " #264653";
    document.getElementById("qu").style.color = " #264653";
    document.getElementById("to").style.color = " #264653";
    document.getElementById("totall").style.color = " #264653";
    body.style.transition = "2s";
  } else {
    body.style.backgroundColor = "#282b2a";
    document.getElementById("header").style.backgroundColor = "#344e41";
    document.getElementById("footer").style.backgroundColor = "#344e41";
    document.getElementById("cart").style.backgroundColor = "#344e41";
    document.getElementById("X").style.color = "white";
    document.getElementById("yc").style.color = " white";
    document.getElementById("pr").style.color = " white";
    document.getElementById("qu").style.color = " white";
    document.getElementById("to").style.color = " white";
    document.getElementById("totall").style.color = " white";
    body.style.transition = "2s";
  }
}

function cart(){
  document.getElementById("cart").style.right = "0px";
}

function del(){
  document.getElementById("cart").style.right = "-500px";
}


let item_number = "item_numbre";
let addItemId = "addItemId";
let counter = 0;

function addToCart(item) {
  addItemId = "addItemId";
  item_number = "item_number"
  

  let input = document.createElement("input")
  input.setAttribute("type", "Number")
  input.setAttribute("class", item_number)
  input.setAttribute("id", item_number)
  input.setAttribute("value", 1)

  let del = document.createElement("button")
  del.setAttribute("class", "btn btn-del")
  del.setAttribute("type", "button")
  del.setAttribute("onClick", "ready()")
  del.innerHTML = "Remove";



  let selectedItem = document.createElement("div");
  selectedItem.classList.add("cartImg");
  selectedItem.setAttribute("class", addItemId);
  let img = document.createElement("img");
  img.setAttribute("src", item.children[1].currentSrc);
  let title = document.createElement("div");
  title.innerText = item.children[2].innerText;
  let title1 = document.createElement("div");
  title1.setAttribute("class", "cart-price")
  title1.innerText = item.children[3].innerText;
  let cartItems = document.getElementById("cartitem");

  selectedItem.append(img);
  selectedItem.append(title);
  selectedItem.append(title1);
  selectedItem.append(input);
  selectedItem.append(del);
  cartItems.append(selectedItem);

  updatetotal();
  ready()
}


function ready() {
  
  let removeCartButtons = document.getElementsByClassName("btn-del")
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem)
  }

  let quantityInputs = document.getElementsByClassName("item_number")
  for (let i = 0; i < quantityInputs.length; i++){
    let input = quantityInputs[i]
    input.addEventListener("change", quantityChanged);
  }
  updatetotal()
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updatetotal();
  
}

function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatetotal();
    
}

function updatetotal() {
  let cartContent = document.getElementsByClassName("cartitem")[0]
  let cartBoxes = document.getElementsByClassName("addItemId");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++){
    let cartBox = cartBoxes[i]
    let priceElement = cartBox.getElementsByClassName("cart-price")[0]
    let quantityElement = cartBox.getElementsByClassName("item_number")[0]
    let price = parseFloat(priceElement.innerText.replace("$",""))
    let quantity = quantityElement.value;
    total = total + (price * quantity);

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("price")[0].innerText = "$" + total;
    
  }
}

function openPage() {
  let x = document.getElementById("search").value

  if (x === "book of night") {
    window.open("./html.html")
  }else if (x === "infinite powers"){
    window.open("./Contact.html")
  }else{
    alert("thare aren't book has this name")
  }
}