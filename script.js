

var toggler = false ; 


function toggle() {

     var el = document.getElementById("ham");
    var men = document.getElementById("menu");
     
    if(!toggler){  
      el.classList.toggle("active");
      men.style.width = '500px'
      men.style.height = '500px'
      toggler = !toggler ; 
    } else { 

      el.classList.toggle("active");
      men.style.width = '0px'
      men.style.height = '0px'

      toggler = !toggler ; 
    }
       
 


  }
  