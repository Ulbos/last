$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin:20,
      nav:true,
      loop:true,
     
       
    

      
    });
  });

document.body.addEventListener('click', collapsFunction);
function collapsFunction(event){
  if(!event.target.classList.contains('coll-btn')) return;
  const atr = event.target.getAttribute('data-toggle')
 const callapseBody = document.querySelector('#' + atr );
 if(callapseBody){
  callapseBody.classList.toggle('hide');
 }
}


// let btn = document.querySelector('.coll-btn')
// let elem = document.querySelector('.active')
// btn.onclick = function(){
// elem.classList.toggle('active')
// }