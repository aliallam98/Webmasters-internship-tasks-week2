const menuButton = document.getElementById("menuButton");
const mobNav = document.getElementById("mobNav");
const firstSpan = document.getElementById("firstSpan");
const secondSpan = document.getElementById("secondSpan");
const toTopButton = document.getElementById("toTopButton");

window.onscroll = () => {
  if (this.scrollY < document.body.offsetHeight / 2) {
    toTopButton.style.transform = "rotate(180deg)";
  } else {
    toTopButton.style.transform = "rotate(0deg)";
  }
};

toTopButton.onclick = () => {
  if (window.scrollY > document.body.offsetHeight / 2) {
    window.scrollTo({
      top: 0,
    });
  } else {
    window.scrollTo({
      top: document.body.offsetHeight,
    });
  }
};
console.log(document.body.offsetHeight);

menuButton.addEventListener("click", function () {
  mobNav.classList.toggle("show-menu");
  firstSpan.classList.toggle("first-span");
  secondSpan.classList.toggle("second-span");
});
const counterElements = document.querySelectorAll(".counter-number");
const animateCounters = () => {
  counterElements.forEach((counterElement) => {
    const targetNumber = parseInt(counterElement.textContent.replace("+", ""));
    const duration = 3000;
    let currentCount = 0;

    const animate = () => {
      currentCount = Math.floor(
        currentCount +
          (targetNumber - currentCount) *
            Math.min(window.performance.now() / duration, 1)
      ); // Linear increment
      counterElement.textContent = `${currentCount}+`;

      if (currentCount < targetNumber) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  });
};
window.addEventListener("load", animateCounters);
