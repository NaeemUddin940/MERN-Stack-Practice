const ListItem = document.getElementById('list')
const cancel = document.querySelector(".cancel")
const Cart = document.getElementById("Cart")
const imgMain = document.querySelector(".imgMain")
const number = document.querySelector(".number")

function imgSwitch(e){
    let value = e.target.src;
    imgMain.setAttribute("src", value)
}

function filelist(){
    ListItem.style.display = "block" 
    document.querySelector('.nav').style.backdropFilter = "blur(50px)"
}

function cnacelList(){
    ListItem.style.display = "none"
}

function CartToggle(){
    Cart.classList.toggle("cart")
}

let count = 0;
function increase(){
    count += 1;
    number.innerHTML = count
}

function decrease(){
    count -= 1;
    number.innerHTML = count

}