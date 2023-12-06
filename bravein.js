
function changeBackground() {
  var selectElement = document.getElementById("backgroundSelect");
  var selectedValue = selectElement.value;
  document.body.style.backgroundImage = "url('" + selectedValue + "')";
}
var audioElement = new Audio();
audioElement.loop = true;
    function changeBackgroundMusic() {
      var selectElement = document.getElementById("musicSelect");
      var selectedValue = selectElement.value;

      if (selectedValue) {
        audioElement.src = selectedValue;
        audioElement.play();
      } else {
        audioElement.pause();
        audioElement.src = "";
      }
    }

