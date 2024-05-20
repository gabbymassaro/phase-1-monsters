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
  })
  .catch(error =>
    console.log(error)
  )