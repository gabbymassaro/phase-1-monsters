document.addEventListener("DOMContentLoaded", (e) => {
  fetch(`http://localhost:3000/monsters/`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('API request failed')
      }
    })
    .then(data => {
        data.forEach(renderMonsters)
    })

  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.querySelectorAll("input")[0].value
    let age = document.querySelectorAll("input")[1].value
    let description = document.querySelectorAll("input")[2].value
    const body = {name: name, age: age, description: description}

    fetch('http://localhost:3000/monsters/', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        renderMonsters(data)
      })
  })
  
  const monsterBios = document.getElementById('monstersAPI')  
  const renderMonsters = (monster) => {
    const h2 = document.createElement('h2')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    h2.textContent = monster.name
    h4.textContent = `Age: ${monster.age}`
    p.textContent = `Bio: ${monster.description}`
    monsterBios.appendChild(h2)
    monsterBios.appendChild(h4)
    monsterBios.appendChild(p)
  }
})


