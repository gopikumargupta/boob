const keyy =document.getElementById('container')


window.addEventListener('keydown',function(e){
    console.log(e.key)
    console.log(e.keyCode);
    console.log(e.code);
    keyy.innerHTML=`<table>
    <tr>
      <th>Key</th>
      <th>keyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table>`
    


    
})







