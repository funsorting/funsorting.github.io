const createOscillator = () => {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  var gainNode = audioCtx.createGain()
  gainNode.gain.value = 0.02 // 2 %
  gainNode.connect(audioCtx.destination)

  var oscillator = audioCtx.createOscillator();
  oscillator.type = 'square';
  oscillator.start();
  oscillator.frequency.value = 0
  oscillator.connect(gainNode);
  return oscillator
}

let o
const play = (frequency) => {
  if(!o)
    o = createOscillator()
  o.frequency.value = frequency;
}

const mute = () => {
  o.frequency.value = 0;
}

module.exports = {
  play,
  mute
}
