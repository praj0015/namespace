document.addEventListener("DOMContentLoaded",init);

function init()
{
    let newSqaureSection=document.createElement("section");
    newSqaureSection.className="box";
    newSqaureSection.textContent="praj0015";
    
    let square=document.getElementById("boxes");
    square.appendChild(newSqaureSection);
    
    newSqaureSection.addEventListener("click",squareClick);
    newSqaureSection.addEventListener("mouseover",mouseOver);
    newSqaureSection.addEventListener("mouseOut",mouseOut);
    
}

function squareClick()
{
    this.style.borderColor="red";
    this.style.backgroundColor="yellow";
    console.log(this);
}

function mouseOver(e)
{
    e.target.classList.toggle("focus");
    console.log(e);
    console.log(e.target);
}

function mouseOut(e){
    
    e.target.classList.toggle("focus");
    e.target.removeAttribute('style');
    console.log(e);
    console.log(e.target);
}