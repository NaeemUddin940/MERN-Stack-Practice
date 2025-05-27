document.querySelector(".menu").addEventListener('click', () => {
document.querySelector('.sideMenu').style.display = "block"
})

document.querySelector('.close').addEventListener('click', () => {
document.querySelector('.sideMenu').style.display = "none"
})


// const imgBox = document.querySelector('.img-box')

// function changeImage(event){
//   let src = event.target.src;
//   imgBox.setAttribute("src", src)
// }