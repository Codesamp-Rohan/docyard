const card = document.querySelector(".card");
const motionMatchMedia = window.matchMedia("prefer-reduced-motion");
const THRESHOLD = 15;

function handleHover(e) 
{
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop} = currentTarget;

    const horizontal = (clientX - offsetLeft)/clientWidth;
    const vertical = (clientY - offsetTop)/clientHeight;
    const rotateX = (THRESHOLD * 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = ((vertical / 2) * THRESHOLD - THRESHOLD).toFixed(2);

    card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e){
    card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

}

if (!motionMatchMedia.matches) {
    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);
}

const card2 = document.querySelector("#card2");
const motionMatchMedia2 = window.matchMedia("prefered-reduced-motion");
const THRESHOLD2 = 15;

if(!motionMatchMedia2.matches)
{
    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);
}