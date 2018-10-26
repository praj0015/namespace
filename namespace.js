
var PRAJ0015={
init: function()
{
    let newSquareDiv = document.createElement("div");
    newSquareDiv.className="box";
    newSquareDiv.textContent="praj0015";
    
    let square=document.querySelector("#boxes");
    square.appendChild(newSquareDiv);
    
    newSquareDiv.addEventListener("click",function(){
        
        newSquareDiv.style.borderColor="yellow";
        newSquareDiv.style.backgroundColor="red";
    });
    newSquareDiv.addEventListener("mouseover",function(){
        
        newSquareDiv.classList.toggle("highlight");
    });
    newSquareDiv.addEventListener("mouseOut",function(){
        
        newSquareDiv.classList.toggle("highlight");
        newSquareDiv.removeAttribute('style');
    });
    
    
// 
//    function squareClick()
//{
//    this.style.borderColor="yellow";
//    this.style.backgroundColor="red";
//}
//
//function mouseOver(e)
//{
//    e.target.classList.toggle("highlight");
//}
//
//function mouseOut(e){
//    
//    e.target.classList.toggle("highlight");
//    e.target.removeAttribute('style');
//       }
};