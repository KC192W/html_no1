var imageArray = ["i-img/cat1.png", "i-img/cat2.png", "i-img/dog1.png", "i-img/dog2.png"];
var currentIndex = 0;
var imageCounter = 0;
var startTime = Date.now();

function changeImage() {
    var imageElement = document.getElementById("image2");
    imageElement.style.opacity = "0";
    setTimeout(function() {
        currentIndex++;
        if (currentIndex >= imageArray.length) {
            currentIndex = 0;
        }
        imageElement.src = imageArray[currentIndex];
        imageElement.style.opacity = "1";

        // Increase the image counter and update the display
        imageCounter++;
        document.getElementById("image-counter").innerText = "擊殺數: " + imageCounter;
    }, 1000); // closing bracket for setTimeout was missing here
}
function updateTime() {
    var elapsedTime = Date.now() - startTime;
    var totalSeconds = Math.floor(elapsedTime / 1000);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    // Display the total time in HH:MM:SS format
    document.getElementById("total-time").innerText = "總時長: " + hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
    // Display the total seconds
    document.getElementById("total-seconds").innerText = "經驗值: " + totalSeconds;
}

setInterval(changeImage, 6000);
setInterval(updateTime, 1000); // update every second
