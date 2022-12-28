
let pulsed = []

const playSound = (e) => {
  if (!pulsed[e.keyCode]) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return //stop the function from running all toghether
    audio.currentTime = 0 //rewind to the start
    audio.play()
    pulsed[e.keyCode] = true
    key.classList.add('playing')
  }
}

const removeTransition = (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!key) return
  key.classList.remove('playing')
  pulsed[e.keyCode] = false

}

window.addEventListener('keydown', playSound)
window.addEventListener('keyup', removeTransition)
