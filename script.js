document.addEventListener('DOMContentLoaded', () => {
  hljs.highlightAll()
})
const container = document.querySelector('.container')
const elements = [
  { text: '#include<stdio.h>' },
  { text: 'int main()' },
  { text: 'int a=10' },
  { text: 'int b=20' },
  { text: 'int c' },
  { text: 'c=a+b' },
  { text: 'printf("%d",c)' },
  { text: 'return 0' },
  { text: '#include<stdio.h>' },
  { text: 'int main()' },
  { text: 'int a=10' },
  { text: 'int b=20' },
  { text: 'int c' },
  { text: 'c=a+b' },
  { text: 'printf("%d",c)' },
  { text: 'return 0' }
]

// shuffle the elements array
for (let i = elements.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  ;[elements[i], elements[j]] = [elements[j], elements[i]]
}

// create and append elements to the container
elements.forEach(({ text }) => {
  const element = document.createElement('p')
  element.textContent = text
  element.className = 'draggable'
  element.draggable = true
  container.appendChild(element)
})

// add event listeners
container.addEventListener('dragover', (e) => {
  e.preventDefault()
  const dragAfterElement = document.elementFromPoint(e.clientX, e.clientY)
  const draggable = document.querySelector('.dragging')
  if (dragAfterElement === null) {
    container.appendChild(draggable)
  } else {
    container.insertBefore(draggable, dragAfterElement)
  }
})

document.querySelectorAll('.draggable').forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})