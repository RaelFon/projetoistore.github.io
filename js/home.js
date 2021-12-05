let image = document.querySelector(".main-image");
let imageIphones = document.querySelector(".img-iphones");
let imageCamera = document.querySelector(".img-camera");
let imageDiversos = document.querySelector(".img-diversos");
let imageMagSafe = document.querySelector(".img-magsafe");

let images = [imageCamera, imageDiversos, imageMagSafe, imageIphones]


function changeImage(value) {
    for (let i = 0; i < images.length; i++) {
        let currentImage = images[i];

        if (images[i].className == value) {
            currentImage.classList.add("current")

            image.setAttribute("src", `/images/${value}-750x500.png`);
        } 
        
        else {
            currentImage.classList.remove("current")
        }
    }
}