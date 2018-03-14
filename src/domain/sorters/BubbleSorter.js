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
              changeCallback(JSON.parse(JSON.stringify(list)), i)
          }
      }

    changeCallback(JSON.parse(JSON.stringify(list)))
}

export default BubbleSorter
