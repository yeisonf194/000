//Formularios
//Eventos de teclado


//Evento dentro de fcus
let name=document.querySelector('#name');
let mensaje=document.querySelector('#etiqueta')
name.onfocus=function(){
    console.log('Este es el evento focus');
    name.style.background='rgba(0,0,255,0.3)';
}


//Evento fuera de foco
name.onblur=function(){
    console.log('estoy fuera de foco');
    name.style.background='white';
    if (name.value==0) {
        alert("Campo vacio");
        mensaje.innerHTML='Este campo es obligatorio';
        mensaje.style.color='red';
    }else{
        mensaje.style.display='none';
    }
    
}

//Evento keydown: mantener presionado

//Codigo para mostrar la tecla presionada
name.onkeydown=function(tecla){
    console.log("Presionando la tecla",tecla.keyCode);
    console.log("Presionando la tecla",String.fromCharCode(tecla.keyCode));
}

//Keypress: presionar una vez
name.onkeypress=function(tecla){
    console.log("Presionando la tecla repetivas veces",tecla.keyCode);
    console.log("Manteniendo presionado",String.fromCharCode(tecla.keyCode));
}

//keyup: soltar tecla
name.onkeyup=function(tecla){
    console.log("Soltando la tecla",tecla.keyCode);
    console.log("Soltando la tecla",String.fromCharCode(tecla.keyCode));
}