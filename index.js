console.log("Hello")

document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const movesContainer = document.querySelector("#moves-container")
  const roboButton = document.getElementById('move-button')
  console.log(movesContainer)
  console.log(roboButton)

  
  // console.log(moveTest)

  document.addEventListener('keydown', event => {
    if (event.key == "ArrowUp"){ 
      const listTag = document.createElement("li")
      console.log("You went up!")
      movesContainer.append(listTag) 
      listTag.innerText = "Up"
   } else if (event.key == "ArrowDown") {
    const listTag = document.createElement("li")
       console.log("You went down!")
       movesContainer.append(listTag) 
       listTag.innerText = "Down"
    }
    // console.log(event.key)
    // debugger
  })

  document.addEventListener("click", event => {
    console.log(event)
    // if(event.key.startsWith("Arrow"))
    // const list = document.getElementsByTagName('li')
    // list.remove()
  })
});



