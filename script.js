let ImagesNumber=9;
let res=document.querySelector('.res');
let btn=document.querySelector('.btn');

function RandomNumber() {  
    return Math.floor(Math.random() * ImagesNumber) + 1;
}

function RandomImages() {
    let randomImage = RandomNumber();
    let imageUrl = `images/${randomImage}.jpg`;
    Image.src = imageUrl;
    res.innerHTML=imageUrl;
}
btn.onclick=RandomImages;


