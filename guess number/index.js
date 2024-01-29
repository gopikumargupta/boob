let number=parseInt(Math.random()*100+1)


const button= document.querySelector('#subm')
const input=document.querySelector("#guess")
const preguess=document.querySelector(".guss")
const lastResult=document.querySelector(".lr")
const lowOrhigh=document.querySelector('.Lowhigh')
const resultdiv=document.querySelector('.resultdiv')

const p=document.createElement('p')

let prevguess=[]
let numGuess=2;
let playGame=true


if(playGame){
    button.addEventListener('click',function(e){
        e.preventDefault()
        const guessNumber= parseInt(input.value)
        console.log(guessNumber)
        validateGuess(guessNumber)


    });
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("enter a valid number")
    }
    else if(guess < 1){
        alert("please enter a  number more than 1")
    }
    else if(guess >100){
        alert("please enter a  number less than hundred")
    }
    else{
        prevguess.push(guess)
     if(numGuess===11){
        displayguess(guess)
        displayMessage(`Game over. Random numer was ${number}`)
        console.log(guess)
        endgame()
        }
     else{
            displayguess(guess);
            cheakguess(guess);
        }
    }

}


function cheakguess(guess){
    if(guess===number){
        displayMessage("you guessed it right")

    }
    else if(guess<number){
        displayMessage("Number is too low")
    }
    else if(guess>number){
        displayMessage("number is too high")
    }
    

}


function displayMessage(massage){
    lowOrhigh.innerHTML=`<h2>${massage}</h2>`
    

}




function displayguess(guess){
    input.value=""
    preguess.innerHTML+=`${guess}, `
    numGuess++;
    console.log(numGuess)
    lastResult.innerHTML=`${12-numGuess}`

}
function newgame(){
    const butt=document.querySelector('#Start')
    butt.addEventListener('click',function(e){
        number=parseInt(Math.random()*100+1)
        prevguess=[]
        numGuess=1;
        preguess.innerHTML=""
        lastResult.innerHTML=`${10-numGuess}`
        input.removeAttribute('disabled',' ')
        resultdiv.removeChild(p)
        playGame=true

    })
    
    

    

}
function endgame(){
    input.value=" "
    input.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML='<h2 id="Start">Start new game</h2>'

    resultdiv.appendChild(p);
    playGame=false;
    newgame();



}





