const url= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="





const but= document.querySelector('#but')
const text=document.querySelector('#text')
const img= document.querySelector('#qrimg')

but.addEventListener('click',()=>{
    img.src =url+text.value
    

    // img.classList.add("show-img")
    // console.log('bok')
})

