const showTour = () => {
  const [shufflerButtons] = document.getElementsByClassName("shuffler__buttons")
  const [soundButton] = document.getElementsByClassName("shuffler__sound")
  const [sorterMethods] = document.getElementsByClassName("sorterMethods")

  const tourShufflerButtons = document.getElementById("tourShufflerButtons")
  const tourSoundButton = document.getElementById("tourSoundButton")
  const tourSorterMethods = document.getElementById("tourSorterMethods")

  const shufflerButtonsPositions = shufflerButtons.getBoundingClientRect()
  const soundButtonPositions = soundButton.getBoundingClientRect()
  const sorterMethodsPositions = sorterMethods.getBoundingClientRect()

  tourShufflerButtons.style.top = shufflerButtonsPositions.top + 30 + "px"
  tourShufflerButtons.style.left = shufflerButtonsPositions.left - 100 + "px"

  tourSoundButton.style.top = soundButtonPositions.top - 25 + "px"
  tourSoundButton.style.left = soundButtonPositions.left - 150  + "px"

  tourSorterMethods.style.top = sorterMethodsPositions.top + 40 + "px"
  tourSorterMethods.style.left = sorterMethodsPositions.left + 50 + "px"

  tourShufflerButtons.classList.add('showing');
  tourSoundButton.classList.add('showing');
  tourSorterMethods.classList.add('showing');

  document.body.addEventListener("click", () => {
    tourShufflerButtons.classList.remove('showing');
    tourSoundButton.classList.remove('showing');
    tourSorterMethods.classList.remove('showing');

    setTimeout(() => {
      tourShufflerButtons.style.display = 'none'
      tourSoundButton.style.display = 'none'
      tourSorterMethods.style.display = 'none'
    }, 1000)
  })
}

setTimeout(() => showTour(), 1200)
