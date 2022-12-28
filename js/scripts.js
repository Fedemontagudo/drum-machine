
let pulsed = false

const playSound = (e) => {
  if (!pulsed) {
    pulsed = true
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return //stop the function from running all toghether
    audio.currentTime = 0 //rewind to the start
    audio.play()
    key.classList.add('playing')
  }
}

const removeTransition = (e) => {
  pulsed = false
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
window.addEventListener('keyup', removeTransition)




