let pads = document.getElementsByClassName("pad");

for (let i = 0; i < pads.length; i++) {
  pads[i].addEventListener("click", wrk);

  function wrk() {
    const soundFile = this.dataset.sound;
    const audio = new Audio("stocks/" + soundFile);

    audio.play();
  }
}
