window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //if(!audio) return //stop the function from running all toghether
  audio.currentTime = 0 //rewind to the start
  audio.play()
  key.classList.add('playing')
})

function removeTransition(e) {
  console.log(e)
}



let keys = document.querySelectorAll('.key')
console.log(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

