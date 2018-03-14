const shuffleRandom = (numbers) => {
  const shuffledNumbers = []
  const length = numbers.length
  for(let i = 0; i < length; i++) {
    const randomPosition = Math.floor(Math.random() * (numbers.length))

    shuffledNumbers.push(numbers[randomPosition])
    numbers.splice(randomPosition, 1)
  }

  return shuffledNumbers
}

const shuffleReversed = (numbers) => numbers.reverse()

const shuffleAlmost = (numbers) => {
  for(let i = 5; i <= numbers.length - 1; i += 5) {
    const previous = numbers[i - 4]
    const future = numbers[i + 4]

    numbers[i - 4] = future
    numbers[i + 4] = previous
  }

  return numbers
}

const shuffleUniques = (numbers) => {
  const amount = Math.floor(numbers.length / 5)
  for(let i = 1; i < numbers.length; i += amount){
    numbers.fill(i + amount - 1, i - 1, i + amount - 1)
  }

  return shuffleRandom(numbers)
}

export default [
  {
    id: 'RANDOM',
    shufflerFunction: shuffleRandom
  },
  {
    id: 'REVERSED',
    shufflerFunction: shuffleReversed
  },
  {
    id: 'ALMOST',
    shufflerFunction: shuffleAlmost
  },
  {
    id: 'UNIQUES',
    shufflerFunction: shuffleUniques
  }
]
