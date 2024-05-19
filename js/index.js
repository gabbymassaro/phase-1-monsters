fetch(`http://localhost:3000/monsters`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('API request failed')
    }
  })
  .then(data => {
    const monsterNames = data.map((object) => {
      return object.name
    })
    const headerName = document.getElementById('monstersAPI')
    monsterNames.forEach(item => {
      const h2 = document.createElement('h2');
      h2.textContent = item
      headerName.appendChild(h2)
    })
  })
  .catch(error =>
    console.log(error)
  )