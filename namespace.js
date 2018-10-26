var PRAJ0015 = {
    
    init: function () {
        
        let newSquareDiv = document.createElement("div");
        
        newSquareDiv.className = "box";
        
        newSquareDiv.textContent = "praj0015";
        
        document.getElementById("boxes").appendChild(newSquareDiv);
        
        newSquareDiv.addEventListener("click", function () {
            newSquareDiv.style.borderColor = "yellow";
            newSquareDiv.style.backgroundColor = "red";
        });
        
        newSquareDiv.addEventListener("mouseover", function () {
            newSquareDiv.classList.toggle("highlight");
        });
        
        newSquareDiv.addEventListener("mouseout", function () {
            newSquareDiv.classList.toggle("highlight");
            newSquareDiv.removeAttribute('style');
        });
    }
};