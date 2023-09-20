let video = document.querySelector("#Video2")

document.getElementById('open-modal-img').addEventListener("click", function() {
    document.getElementById("mymodal").classList.add("open")
})

document.getElementById('close-my-modal-btn').addEventListener("click", function() {
    document.getElementById("mymodal").classList.remove("open")
    video.pause()
})

