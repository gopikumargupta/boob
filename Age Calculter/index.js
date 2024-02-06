

////future date blocking code ///

let userInput =document.getElementById('date')
userInput.max=new Date().toISOString().split("T")[0];




let result=document.getElementById('result')



function calculateage(){


    //feacting the date from input feild

    let birth=new Date(userInput.value)
    let d1=birth.getDate();
    let m1=birth.getMonth() + 1 // we plus one because month will be start form january ==0
    let y1=birth.getFullYear()



    let today=new Date();

    let d2=today.getDate()
    let m2=today.getMonth()+1
    let y2=today.getFullYear()



    let d3, m3,y3
    y3=y2-y1;
   
    

    if(m2 >= m1){
        m3=m2-m1
    }else{
        y3--
        m3=12+m2-m1
    }
    if(d2>=d1){
        d3=d2-d1
    }else{
        m3--;
        d3=getDayInMonth(y1,m1) + d2 - d1;
        

    }if(m3 < 0){
        m3=11;
        y3--;
    }

    console.log(y3,m3,d3)


    result.innerHTML=`You are   ${y3}   Year   ${m3}   month and   ${d3}   Days`


 
















}



function getDayInMonth(year,month){
    return new Date(year,month,0).getDate();
}



