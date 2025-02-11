let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let newgamebnt = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg")


let turnO = true;  //playerX , playerY
// there are 8 winning patterns , we can store all these patterns  . 
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let count = 0 
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        count ++ ; 
        if (turnO){
            box.innerText = "O"
            turnO = false
        }else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkWinner(count);
    })
})


const resetGame = () => {

  turnO = true  
  count =0 
  EnableBoxes();
  msgcontainer.classList.add("hide")
}
const disbleBoxes = () => {
    for(let box of boxes ){
        box.disabled = true ;
    }
}
const EnableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations , Winner is ${winner}.`;
    msgcontainer.classList.remove("hide");

}
const showDraw = ()=>{
    msg.innerText = "Draw";
    msgcontainer.classList.remove("hide");
}
const checkWinner = (count) => {
    
    for (let pattern of winpattern ){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if( pos1val ==  pos2val && pos2val == pos3val ){
            disbleBoxes();
            return showWinner(pos1val)
           }
        }
        
    }
    if (count == 9 ){
        showDraw()
        disbleBoxes();
    }

}
newgamebnt.addEventListener("click",resetGame);
ResetBtn.addEventListener("click",resetGame);