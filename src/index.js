console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const allBreeds = []

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('breed-dropdown').addEventListener('change', function(e) {
    let selectedLetter = e.target.value;
    filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter))

    debugger
    filteredBreeds.forEach(function(each) {
      document.getElementById('dog-breeds').innerHTML += `<li> ${each} </li>`
    })
}) // end of filterBreed eventListener
  const fetchImg = fetch(imgUrl).then(res =>{
    if (res.ok) { return res.json() } //end of if
    }) // end of fetch
      .then((dogImg) =>{
        // debugger
        dogImg.message.forEach(function(element) {
          document.getElementById('dog-image-container').innerHTML += `<br> <img src = ${element}> <br>`
        })//end of for Each
      })//end of .then for image container

  const fetchBreed = fetch(breedUrl).then(res => {
    if (res.ok) {return res.json()}//end of if
  })//end of 1st then for fetch Breed
    .then((dogBreed) => {
      let allBreeds = Object.keys(dogBreed.message);
      Object.keys(dogBreed.message).forEach(function(breedHash) {
        document.getElementById('dog-breeds').innerHTML += `<li> ${breedHash} </li>`
      }) //end of 2nd then for fetch Breed
    })//end of for each

  const parentBreedList = document.getElementById('dog-breeds')
  parentBreedList.addEventListener('click', function(e) {
    let currBreed = e.target
    currBreed.style.color = "blue"
  })//end of eventlistener for parentBreedList click




}); //end of event Listerner DOMContentLoaded
