const boxes =document.querySelectorAll('.box')
const player=document.querySelector('.game-info')
const btn=document.querySelector('.btn')

let currplayer;
let gamegrid;
const winpos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function gameinit(){
    currplayer="X";
    gamegrid=["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerHTML="";
        boxes[index].style.pointerEvents="all";
        box.classList=`box box${index+1}`
    })
        
    
    btn.classList.remove('active')
    player.innerText=`Player ${currplayer}`
    

}
gameinit()


function swap(){
    if(currplayer==="X"){
        currplayer="O"
    }else{
        currplayer="X"
    }
    player.innerHTML=`Player ${currplayer}`
}
function gameOver(){
    let ans="";

    winpos.forEach((pos)=>{



     if((gamegrid[pos[0]] !== ""|| gamegrid[pos[1]] !== "" ||gamegrid[pos[2]] !== "") 
     && (gamegrid[pos[0]] === gamegrid[pos[1]]) && (gamegrid[pos[1]] === gamegrid[pos[2]])){

        if(gamegrid[pos[0]] === "X"){
            ans="X"
        }
        else{
            ans="O"
        }

        boxes.forEach((box)=>{
          box.style.pointerEvents="none"
        })
        boxes[pos[0]].classList.add("win")
        boxes[pos[1]].classList.add("win")
        boxes[pos[2]].classList.add("win")
    }

    })

        
    
    
    
     
    if(ans !== ""){
            player.innerText=`Winner Is ${ans}`
            btn.classList.add('active')
            
            return;
    
    }


    let fillCount = 0;
    gamegrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        player.innerText = "Game Tied !";
        btn.classList.add("active");
    
       



    }
    




}
function handleClick(index){

    if(gamegrid[index]==""){
        boxes[index].innerText=currplayer;
        gamegrid[index]=currplayer;


        boxes[index].style.pointerEvents="none"
        swap();
        gameOver();
    }
}


boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
        

    })
})
btn.addEventListener("click",gameinit)