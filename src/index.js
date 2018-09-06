document.addEventListener('DOMContentLoaded', () => {

  const dogsTable = document.getElementById('table-body')
  const dogForm = document.querySelector('#dog-form')
  // const formName = dogForm.querySelector(dog.)
  //got table id now create what you need to get info inside

  dogsTable.addEventListener("click", (e) => {
    if (e.target.nodeName === 'BUTTON') {
      dogForm.children[0].value = e.target.parentNode.parentNode.children[0].innerText
      dogForm.children[1].value = e.target.parentNode.parentNode.children[1].innerText
      dogForm.children[2].value = e.target.parentNode.parentNode.children[2].innerText
      dogForm.dataset.id = e.target.parentNode.parentNode.dataset.id
    }
  })

  dogForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const updatedDog = {
      name: dogForm.children[0].value,
      breed: dogForm.children[1].value,
      sex: dogForm.children[2].value
    }
    Adapter.updateDogTable(e.target.dataset.id, updatedDog)
      .then(newDog => {
        const tr = document.querySelector(`tr[data-id="${newDog.id}"]`)
        tr.children[0].innerText = newDog.name
        tr.children[1].innerText = newDog.breed
        tr.children[2].innerText = newDog.sex
      })
  })

  Adapter.getDogTable()
    .then(dogs => {
      dogs.forEach(renderDogRow)
    })



  const renderDogRow = (dog) => {
    const tr = document.createElement('tr')
    tr.dataset.id = dog.id
    tr.innerHTML = `<td>${dog.name}</td>
    <td>${dog.breed}</td>
    <td>${dog.sex}</td>
    <td><button>Edit</button></td>`

    dogsTable.appendChild(tr)
  }


})
