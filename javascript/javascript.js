// Pone boton cerrar
let tasksList = document.getElementsByTagName("li")
let position
for (position = 0; position < tasksList.length; position++) {
  let span = document.createElement("SPAN")
  let txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  tasksList[position].appendChild(span)
}

//Oculta elementos en la lista cuando se les pica en el boton X
let close = document.getElementsByClassName("close")
for (position = 0; position < close.length; position++) {
  close[position].onclick = function() {
    let div = this.parentElement
    div.style.display = "none"
  }
}

// Pone el simbolo de palomita
let list = document.querySelector('ul')
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked')
  }
}, false)

// logica del boton to top
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll").style.display = "block"
  } else {
    document.getElementById("scroll").style.display = "none"
  }
}

function toTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// meter dato con enter
let input = document.getElementById("myInput")
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault()
   document.getElementById("addBtn").click()
  }
})

// Crea el nuevo elemento al picarle al boton
function newElement() {
  let li = document.createElement("li")
  let inputValue = document.getElementById("myInput").value
  let t = document.createTextNode(inputValue)

  li.appendChild(t)

  if (inputValue === '') {
    alert("You must write something!")
  } else {
    document.getElementById("not_done").appendChild(li)
  }
  document.getElementById("myInput").value = ""

  let span1 = document.createElement("span")
  span1.className = "time"
  let datepicker = document.createElement("input")
  datepicker.type = "date"
  datepicker.value = new Date()
  span1.appendChild(datepicker)
  li.appendChild(span1)

  let span2 = document.createElement("SPAN")
  let txt = document.createTextNode("\u00D7")
  span2.className = "close"
  span2.appendChild(txt)
  li.appendChild(span2)

  for (position = 0; position < close.length; position++) {
    close[position].onclick = function() {
      let div = this.parentElement
      div.style.display = "none"
    }
  }
}

// no se termino la funcion de separar aquellos que se
// marcaban como terminado
function revealNhide() {

}
