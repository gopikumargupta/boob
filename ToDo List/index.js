const inputbox=document.getElementById('text-field')
const listContainer=document.getElementById('list-container')
const body=document.querySelector('body');



function add(){
    if(inputbox.value===''){
        alert("PLEASE WRITE SOMETHING")
    }
    
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value
        listContainer.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span);


        
        


        


    }

    inputbox.value="";
    savedata();

}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    
})



function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function displaydata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
displaydata()


body.addEventListener('keyup',function(e){
    
    if(e.key==='Enter'){
        add();
    }

})
