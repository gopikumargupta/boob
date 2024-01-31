const panel =document.querySelectorAll('.panal')
console.log(panel)
panel.forEach((panel) => {
    panel.addEventListener('click',function(){
        console.log("aditya gandu")
        removeActiveClasses()
        panel.classList.add('active')
    })
    
});

function removeActiveClasses(){
    panel.forEach(panel=>{
        panel.classList.remove('active')
    })
}