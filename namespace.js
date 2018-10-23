document.addEventListener("DOMContentLoaded",init);

function init()
{
    let newSquareSection=document.createElement("section");
    newSquareSection.className="box";
    newSquareSection.textContent="praj0015";
    
    let square=document.getElementById("boxes");
    square.appendChild(newSquareSection);
    
    newSquareSection.addEventListener("click",squareClick);
    newSquareSection.addEventListener("mouseover",mouseOver);
    newSquareSection.addEventListener("mouseOut",mouseOut);
    
}

function squareClick()
{
    this.style.borderColor="yellow";
    this.style.backgroundColor="red";
    console.log(this);
}

function mouseOver(e)
{
    e.target.classList.toggle("focus");
    e.target.style.background="orange";
    e.target.style.borderColor="green";
    e.target.style.border=1rem;
    console.log(e);
    console.log(e.target);
}

function mouseOut(e){
    
    e.target.classList.toggle("focus");
    e.target.removeAttribute('style');
    console.log(e);
    console.log(e.target);
}