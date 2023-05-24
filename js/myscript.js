
const gridElement = document.querySelector(".grid");

const button = document.querySelector("button")

button.addEventListener("click", function(){

    for (let i = 1; i < 101; i++) {
        let cellElement = document.createElement("div");
    
        cellElement.classList.add("cell")
    
        cellElement.append(i)
    
        gridElement.appendChild(cellElement);
    
        cellElement.addEventListener("click" , function (){
        
            cellElement.classList.toggle("active")
        })        
    }
    
 
})


