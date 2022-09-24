function slideImage() {
    let count = 0;
    let imageLibrary = ["snap_1.png", "snap_2.png", "snap_3.png", "snap_4.png", "snap_5.png"]
    let slideImage = document.querySelector("#snap");
    let prevImage = document.querySelector("#previous");
    let nextImage = document.querySelector("#next");
    nextImage.addEventListener('click', function (event) {
        if (count < 4) {
            count += 1;
            slideImage.setAttribute("src", "assets/image/" + imageLibrary[count]);
        }
    })
    prevImage.addEventListener('click', function (event) {
        if (count > 0) {
            count -= 1;
            slideImage.setAttribute("src", "assets/image/" + imageLibrary[count]);
        }
    })
}

slideImage();