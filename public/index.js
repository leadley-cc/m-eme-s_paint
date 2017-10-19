var app = function () {
  var canvas = document.querySelector("#main-canvas")
  var context = canvas.getContext("2d")

  var stickerUrl = "https://emoji.slack-edge.com/T0TN401HD/jaguar_head/26f8ce0723f7b1ad.png"

  context.fillStyle = "tomato"
  context.strokeStyle = "dodgerblue"

  var changeStickerUrl = function () {
    stickerUrl = this.value
  }

  var drawCircle = function (x, y) {
    context.beginPath()
    context.arc(x, y, 50, 0, 2 * Math.PI)
    context.fill()
  }

  var drawSticker = function (x, y) {
    var img = document.createElement("img")
    img.src = stickerUrl
    context.drawImage(img, x - 20 - img.naturalWidth / 2, y - 88 - img.naturalHeight / 2)
  }

  var drawOnMouseMove = function (event) {
    drawSticker(event.x, event.y)
  }

  canvas.addEventListener("mousedown", function (event) {
    drawSticker(event.x, event.y)
    canvas.addEventListener("mousemove", drawOnMouseMove)
  })

  canvas.addEventListener("mouseup", function (event) {
    canvas.removeEventListener("mousemove", drawOnMouseMove)
  })

  var changeColour = function () {
    context.fillStyle = this.value
  }

  var stickerSelectors = document.querySelectorAll(".sticker-select")
  stickerSelectors.forEach(stickerSelector => {
    stickerSelector.addEventListener("click", changeStickerUrl)
  })
}

window.addEventListener("load", app)
