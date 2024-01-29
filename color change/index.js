const green = document.querySelectorAll('.button')

const body = document.querySelector('body')
const reset=document.querySelector('.but')



green.forEach(function (bo) {

    bo.addEventListener("click", function (e) {
        if (e.target.id == "yello") {
            body.style.backgroundColor = "yellow"
        }
        else if (e.target.id == "gray") {
            body.style.backgroundColor = "gray"
        }
        else if (e.target.id == "white") {
            body.style.backgroundColor = "red"
        }
        else if (e.target.id == "green") {
            body.style.backgroundColor = "green"
        }
        
    });
    

});


reset.addEventListener("click",function(){
    body.style.backgroundColor="white";
})





