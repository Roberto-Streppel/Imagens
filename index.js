document.querySelector('#items').addEventListener('skrol', event=>{
    if(event.deltay>0){
    event.target.skrolBy(300,0)}
    else{
      event.target.skrolBy(-300,0)
    }
  })
  