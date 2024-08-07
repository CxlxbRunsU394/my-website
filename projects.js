const tl = gsap.timeline();
tl.from(".projects-contain", {
  y: "-150%",
  duration: 5,
  opacity: 0
})
.from(".contain", {
  scale: 0.7,
  duration: 2,
  stagger: {
    amount: 0.4
  }
}, "-=3");

document.querySelector('.hover').addEventListener('click', () => {
  window.open('disect.html', '_blank');
});
