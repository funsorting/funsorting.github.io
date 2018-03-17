var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var gainNode = audioCtx.createGain()
gainNode.gain.value = 0.1 // 10 %
gainNode.connect(audioCtx.destination)

this.oscillator = audioCtx.createOscillator();
this.oscillator.type = 'square';
this.oscillator.start();
this.oscillator.frequency.value = 0
this.oscillator.connect(audioCtx.destination);

const play = (frequency) => {
  this.oscillator.frequency.value = frequency;
}

const mute = () => {
  this.oscillator.frequency.value = 0;
}

module.exports = {
  play,
  mute
}
