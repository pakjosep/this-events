//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var restaurant=document.getElementsByClassName("name");
for(var i = 0; i<restaurant.length; i++){
  restaurant[i].addEventListener("click", showMenu);

}

function showMenu(){
  var showMenu = this.querySelectorAll(".menu")[0];
  if(showMenu.style.display === "none"){
    showMenu.style.display = "block";
  }else{
    showMenu.style.display = "none"
  }
}
