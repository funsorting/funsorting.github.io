var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();

let last
function playNote(frequency, duration) {

oscillator.type = 'square';
oscillator.frequency.value = frequency; // value in hertz
oscillator.connect(audioCtx.destination);

  if(last) {
    oscillator.stop();
  }

  oscillator.start();



 last = setTimeout(
    function(){
        oscillator.stop();
    }, duration);


}


const BubbleSorter = (list, changeCallback) => {
    let temp
    const n = list.length

    const steps = []

    for(let step=0;step<n-1;++step)
      for(let i=0;i<n-step-1;++i)
      {
          if(list[i].value>list[i+1].value)   /* To sort in descending order, change > to < in this line. */
          {
              temp=list[i].value;
              list[i].value=list[i+1].value;
              list[i+1].value=temp;
              changeCallback(list, i)
              playNote(500, 10)
          }
      }

    changeCallback(list)
}

export default BubbleSorter
