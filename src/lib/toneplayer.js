function webAudioTouchUnlock(context) {
    return new Promise(function (resolve, reject) {
        if (!context || !(context instanceof (window.AudioContext || window.webkitAudioContext))) {
            reject('WebAudioTouchUnlock: You need to pass an instance of AudioContext to this method call');
            return;
        }
        if (context.state === 'suspended' && 'ontouchstart' in window) {
            var unlock_1 = function () {
                context.resume().then(function () {
                    document.body.removeEventListener('touchstart', unlock_1);
                    document.body.removeEventListener('touchend', unlock_1);
                    resolve(true);
                }, function (reason) {
                    reject(reason);
                });
            };
            document.body.addEventListener('touchstart', unlock_1, false);
            document.body.addEventListener('touchend', unlock_1, false);
        }
        else {
            resolve(false);
        }
    });
}


let o
const play = (frequency) => {
  if(!o) {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    webAudioTouchUnlock(audioCtx)
      .then(() => {
        var gainNode = audioCtx.createGain()
        gainNode.gain.value = 0.02 // 2 %
        gainNode.connect(audioCtx.destination)

        var oscillator = audioCtx.createOscillator();
        oscillator.type = 'square';
        oscillator.start();
        oscillator.frequency.value = 0
        oscillator.connect(gainNode);
        o = createOscillator()
      })
      .catch((e) => { console.error(e) })


    o.frequency.value = frequency;
  }


}

const mute = () => {
  o.frequency.value = 0;
}

module.exports = {
  play,
  mute
}
