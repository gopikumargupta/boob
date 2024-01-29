const form=document.querySelector("form");


form.addEventListener("submit",function(e){
    e.preventDefault();


    const hight= document.querySelector("#hight");
    const weight = document.querySelector("#weight");
    const result=document.querySelector("#result");
    const uw=document.querySelector("#uw")


    let h=parseInt(hight.value);
    h=h/100;
    h=h*h;
    let w=parseInt(weight.value);

    let bmi= parseFloat(w/h).toFixed(2);
    result.innerHTML=bmi;

    if(bmi<18.6){
    document.querySelector("#uw").style.color="green"
    }else if(bmi >18.6 && bmi <= 24.9){
        document.querySelector("#nw").style.color="yellow"
    }else if(bmi > 24.9){
        document.querySelector("#ow").style.color="red"
    }
    


    
  
})










