document.getElementById('p-button').addEventListener('click', ()=>{
    let parent = document.getElementById('p-div'); 
    let newElement = document.createElement('p'); 
    newElement.innerHTML = document.getElementById('p-input').value; 
    parent.appendChild(newElement)
    document.getElementById('p-input').value = ''; 
})
