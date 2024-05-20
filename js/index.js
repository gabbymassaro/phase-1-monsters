fetch(`http://localhost:3000/monsters`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('API request failed')
    }
  })
  .then(data => {

    const monsters = data.map((object) => {
      return object
    })

    const monsterBios = document.getElementById('monstersAPI')
    monsters.forEach(item => {
      const h2 = document.createElement('h2')
      const h4 = document.createElement('h4')
      const p = document.createElement('p')
      h2.textContent = item.name
      h4.textContent = item.age
      p.textContent = item.description
      monsterBios.appendChild(h2)
      monsterBios.appendChild(h4)
      monsterBios.appendChild(p)
    })

    // const monsterNames = data.map((object) => {
    //   return object.name
    // })

    // const monsterAges = data.map((object) => {
    //   return object.age
    // })

    // const monsterBios = data.map((object) => {
    //   return object.description
    // })

    // const headerName = document.getElementById('monstersAPI')
    // monsterNames.forEach(item => {
    //   const h2 = document.createElement('h2');
    //   h2.textContent = item
    //   headerName.appendChild(h2)
    // })

    // const headerAge = document.getElementById('monstersAPI')
    // monsterAges.forEach(item => {
    //   const h4 = document.createElement('h4');
    //   h4.textContent = item
    //   headerAge.appendChild(h4)
    // })

    // const headerBio = document.getElementById('monstersAPI')
    // monsterBios.forEach(item => {
    //   const h4 = document.createElement('h4');
    //   h4.textContent = item
    //   headerBio.appendChild(h4)
    // })

  })
  .catch(error =>
    console.log(error)
  )