const menu = document.querySelector(".menu");
function desplegar(){
  if(menu.classList.contains("activado")){
    menu.classList.remove("activado")
  }else{
    menu.classList.add("activado")
  }
}