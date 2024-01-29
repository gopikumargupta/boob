

const start=document.querySelector('#start');
const stop=document.querySelector('#stop')
const body=document.querySelector('body');
// for(let i=0;i<arr.length;i++){
//     body.style.backgroundColor=("#"+arr[i]);
//     console.log("#"+arr[i]);
// }


const color= function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]

    }
    return color
}
console.log(color())




    




start.addEventListener('click',function(e){
    
    
    const bhalo=setInterval(function(){
        document.body.style.backgroundColor=color();
       


    },300)

    stop.addEventListener('click',function(){
        clearInterval(bhalo)

    })
    
    






    
    

})