const images = {
    img1: {
        path: "./img/img1.jpg",
        alt: "img1"
    },
    img2: {
        path: "./img/img2.jpg",
        alt: "img2"
    },
    img3: {
        path: "./img/img3.jpg",
        alt: "img3"
    },
};

const imageKeys = Object.keys(images); 
let index = 0;
console.log(imageKeys.length);


function updateBackgroundImage() {
    const currentImage = images[imageKeys[index]];
    document.getElementById("content").style.backgroundImage = `url('${currentImage.path}')`;
    // console.log("updateBackgroundImage " + index);
}

function nextImg() {
    index = (index + 1) % imageKeys.length;
    updateBackgroundImage();
    // console.log("nextImg " + index);
    console.log("(" + index + " + 1) % " + imageKeys.length);
}

function previousImg() {
    index = (index - 1 + imageKeys.length) % imageKeys.length;
    updateBackgroundImage();
    console.log("(" + index + " - 1 + " + imageKeys.length +") % " + imageKeys.length);
    
    // console.log("previousImg " + index);
    
}

function img1() {
    index = 0;
    updateBackgroundImage();
}

function img2() {
    index = 1;
    updateBackgroundImage();
}

function img3() {
    index = 2;
    updateBackgroundImage();
}
