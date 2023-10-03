var open2=document.querySelector('.open');
var  ul=document.querySelector('.ul1');

open2.addEventListener('click',function(){
    ul.classList.toggle('show')
})
window.addEventListener('click',(e)=>{
    if(e.target!==open2){
      ul.classList.remove('show');
    }
  })