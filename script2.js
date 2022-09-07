

function addToCart() {

    let selectedItem = document.createElement("div");
    selectedItem.setAttribute("class", "item");
    let img = document.createElement("img");
    img.setAttribute("src","./images/user (1).png");
    img.setAttribute("class","user");
    let text = document.createElement("div");
    text.setAttribute("class","the review");
    text.innerText = document.getElementById("yr").value;
    let name = document.createElement("div")
    name.setAttribute("class", "un")
    name.innerText = "You";
    let imna = document.createElement("div")
    imna.setAttribute("class", "imna")
    let set = document.getElementById("Reviews");


    imna.append(img)
    imna.append(name)
    selectedItem.append(imna);
    selectedItem.append(text);
    set.append(selectedItem);

}
function review(params) {
    
}