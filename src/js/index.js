let cimg = document.querySelector('.content__img')
let modal = document.querySelector('.modal')
let video = document.querySelector('.main__video')
function stopVideo(){
    video.pause();
    video.currentTime = 0;
}

modal.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    `;

cimg.onclick = () => {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
};

const CloseModal = event => {
    const target = event.target;

    if (target === modal) {
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        video.pause()
    }
};

modal.addEventListener('click', CloseModal);
