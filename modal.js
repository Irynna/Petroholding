'use strict';
function Modal (modal){
    this.open = function(){
      modal.css({'position':'absolute', 'display': 'block'});  
    };
   this.close=function(){ 
       modal.css({'display': 'none'});  
    };
};

document.addEventListener("DOMContentLoaded", function(){
  
  var modal1 = new Modal($(".modal"));
    
    $(".open-modal").click(modal1.open);
    
    $(".close").click(modal1.close);
    
})