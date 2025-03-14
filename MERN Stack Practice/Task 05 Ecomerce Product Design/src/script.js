const ListItem = document.getElementById('list')
const cancel = document.querySelector(".cancel")

function filelist(){
    ListItem.style.display = "block" 
    document.querySelector('.nav').style.backdropFilter = "blur(50px)"
}

function cnacelList(){
    ListItem.style.display = "none"
}