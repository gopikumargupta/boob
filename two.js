// setTimeout(function(){
//     console.log("gopi")
// },2000)
// setInterval(function(){
//     console.log("bhalo")
// },5000)
// function gopi(){

//     console.log("gopi")

// }
// function rishi(){
//     console.log("rishi")
// }
// setTimeout(gopi,2000);
// setInterval(rishi,3000);


// function gol (){
//     const hed=document.getElementById('hed').innerHTML= "chai pilo friend"
//     console.log("boka")

// }
//  const gola=setTimeout(gol,5000);
//  document.querySelector("#but").addEventListener("click",function(){
//     clearTimeout(gola)
//     console.log("boka boka")
//  })

// setInterval(function(){
//     console.log("boka choda",Date.now());

// },2000)


const h1=document.getElementById('hed')
const start=document.getElementById('but1')
const end= document.getElementById('but2')


start.addEventListener('click',function(){
    console.log("choka")
    const endd = setInterval(function(){
        console.log("boka choda")


    },4000)
    end.addEventListener('click',function(){
        clearInterval(endd)
        console.log("boka")
    })
})





 


 




