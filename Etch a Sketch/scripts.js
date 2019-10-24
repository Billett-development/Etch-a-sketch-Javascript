init();
function init() {
    
    generateDivs();
    changeColor();
    
}

function generateDivs() {
   
const container = document.querySelector('#container');
    for(var i = 0; i < 100; i++){
        
        // creates divs
        const div = document.createElement('div');
        
        container.appendChild(div);
        
        // adds sizing class to the new created div
        div.classList.add('span-1-of-4');
        
        // adds the colour class  
        div.classList.add('div-color');
        
        //gives new divs an id of divs
        div.setAttribute("id" , "div");
        

    }
    

}

//div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

function changeColor() {
    
    let elements = Array.from(getDivs());
    
    elements.forEach(function(elements) {
        elements.addEventListener('mouseover', () => {
           elements.style.backgroundColor = 'red'; 
            
        });
        
    });
        
    }

function getDivs() {
    
    return document.getElementsByClassName("span-1-of-4");
    
}