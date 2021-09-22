const filterInput = document.querySelector('.search')
const addTodo = document.querySelector('.add-todo')
const todos = document.querySelector('.todos-container')

// filtrando todos
filterInput.addEventListener('input', event =>{
    event.preventDefault()
    const inputValue = event.target.value.trim().toLowerCase()
    const convertedInput = Array.from(todos.children)
    console.log(convertedInput)
    //console.log(inputValue)
    convertedInput.filter(todo => {
        return !todo.textContent.toLowerCase().includes(inputValue)// todo
    }).forEach(li => {
        li.classList.remove('todo')
        li.classList.add('hide')
    })
    convertedInput.filter(todo => {
        return todo.textContent.toLowerCase().includes(inputValue)
    }).forEach(li => {
        li.classList.remove('hide')
        li.classList.add('todo')
    })

})

// Adcionando todos
addTodo.addEventListener('submit', event => {
    event.preventDefault()
    let inputValue = event.target.add.value.trim()

    if(inputValue.length){
        todos.innerHTML += `
        <li class="todo">
        <span>${inputValue}</span>
        <i class="fas fa-trash delete"></i>
    </li>`
     event.target.reset()
}
    console.log(inputValue, todos)
})

// Deletando todos
todos.addEventListener('click', event =>{
        event.preventDefault()
        let clickedItem = event.target
        if(Array.from(clickedItem.classList).includes('delete')){
            clickedItem.parentElement.remove()
        }   
})
