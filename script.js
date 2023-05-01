const menuToogle= document.querySelector('.menuToogle')
const navegacion = document.querySelector('.navegacion')

menuToogle.onclick =function(){
    navegacion.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click', activarLink)
)
//--------al inicio -----------
$(document).ready(function() {
    $(".experiencia").hide();
    $(".habilidades").hide();
    $(".proyectos").hide();
    $(".certificaciones").hide();
    $(".contacto").hide();
  });
//-------------------------------------------------------------
$(document).ready(function() {
    $(".perfilProfesional").click(function(event) {
      event.preventDefault();
  
      $(".textoPefil").fadeIn(500);
      $(".experiencia").fadeOut(500); 
      $(".habilidades").fadeOut(500);
      $(".proyectos").fadeOut(500);
      $(".certificaciones").fadeOut(500); 
      $(".contacto").fadeOut(500);
    });
  });

//--------------------------------------------------------------
  $(document).ready(function() {
    $(".linkExperiencia").click(function(event) {
      event.preventDefault();
  
      $(".experiencia").fadeIn(500);
      $(".textoPefil").fadeOut(500); 
      $(".habilidades").fadeOut(500);
      $(".proyectos").fadeOut(500);
      $(".certificaciones").fadeOut(500); 
      $(".contacto").fadeOut(500);   
    });
  });
//--------------------------------------------------------------
  $(document).ready(function() {
    $(".linkHabilidades").click(function(event) {
      event.preventDefault();
  
      $(".habilidades").fadeIn(500);
      $(".textoPefil").fadeOut(500); 
      $(".experiencia").fadeOut(500);
      $(".proyectos").fadeOut(500);
      $(".certificaciones").fadeOut(500); 
      $(".contacto").fadeOut(500);   
    });
  });
//--------------------------------------------------------------
$(document).ready(function() {
    $(".linkProyectos").click(function(event) {
      event.preventDefault();
  
      $(".proyectos").fadeIn(500);
      $(".textoPefil").fadeOut(500); 
      $(".habilidades").fadeOut(500);
      $(".experiencia").fadeOut(500);
      $(".certificaciones").fadeOut(500); 
      $(".contacto").fadeOut(500);   
    });
  });
//--------------------------------------------------------------
$(document).ready(function() {
    $(".linkCertificaciones").click(function(event) {
      event.preventDefault();
  
      $(".certificaciones").fadeIn(500);
      $(".textoPefil").fadeOut(500); 
      $(".habilidades").fadeOut(500);
      $(".experiencia").fadeOut(500);
      $(".proyectos").fadeOut(500); 
      $(".contacto").fadeOut(500);   
    });
  });
//--------------------------------------------------------------
$(document).ready(function() {
    $(".linkContacto").click(function(event) {
      event.preventDefault();
  
      $(".contacto").fadeIn(500);
      $(".textoPefil").fadeOut(500); 
      $(".habilidades").fadeOut(500);
      $(".experiencia").fadeOut(500);
      $(".proyectos").fadeOut(500); 
      $(".certificaciones").fadeOut(500);   
    });
  });