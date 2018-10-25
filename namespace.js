
var PRAJ0015={
init: function()
{
    let newSquareDiv=document.createElement("div");
    newSquareDiv.className="box";
    newSquareDiv.textContent="praj0015";
    
    let square=document.querySelector("#boxes");
    square.appendChild(newSquareDiv);
    
    newSquareSection.addEventListener("click",squareClick);
    newSquareSection.addEventListener("mouseover",mouseOver);
    newSquareSection.addEventListener("mouseOut",mouseOut);
 
    function squareClick()
{
    this.style.borderColor="yellow";
    this.style.backgroundColor="red";
}

function mouseOver(e)
{
    e.target.classList.toggle("highlight");
}

function mouseOut(e){
    
    e.target.classList.toggle("highlight");
    e.target.removeAttribute('style');
       }
};