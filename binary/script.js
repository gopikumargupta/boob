






function convert (value){
    
console.log(value);
    
    

    
    let rem=0;
    let i=0;

    while(value>0){
        let ls=Math.round(value%10);
        if(ls != 0 && ls != 1){
            console.log(ls)
            
            return bbb.innerHTML='<div style=color:red >Enter A Valid Binary</div>';
            

        }
        
        
        rem=rem+Math.pow(2,i)*ls;
        i++
        value=value/10;
        console.log(rem);


        




    }
    return rem;
        
   
    
    




}
const button=document.getElementById('con')
const bbb=document.querySelector('.value')

  



button.addEventListener('submit',function(e){
    e.preventDefault()


 let value1=document.querySelector('#text').value
 parseInt(value1)
   console.log(value1)
    console.log("gopi");

    
    bbb.innerHTML=convert(value1);
    bbb.style.color="green"
    


})