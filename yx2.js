var tableCells = document.getElementsByTagName('td');
    for (var i = 0; i < tableCells.length; i++) {
      tableCells[i].addEventListener('click', function() {
        for (var j = 0; j < tableCells.length; j++) {
          tableCells[j].classList.remove('active'); // 移除所有单元格上的 'active' 类
        }
        this.classList.add('active'); // 仅添加 'active' 类到被点击的单元格上
      });
    }
    var imageSelect = document.getElementById('imageSelect');
    imageSelect.addEventListener('change', function() {
      var selectedImage = this.value;
      var overlayImages = document.getElementsByClassName('overlay-image');
      for (var i = 0; i < overlayImages.length; i++) {
        overlayImages[i].src = selectedImage; // 这里更改图片链接
      }
    });
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