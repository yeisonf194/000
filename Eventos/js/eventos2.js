function cambiarColor(){
     let btnColor=document.querySelector('#btnColor');
     let color=btnColor.style.background;
     console.log(color);
     btnColor.style.padding='30px';
    btnColor.style.border='black solid 2px';
    if (color=='red'){
        btnColor.style.background='black';
    } else{
        btnColor.style.background='red';
    }
}

//addEventListener
let btnAdd=document.querySelector('#btnAdd');
let caja=document.querySelector('.caja');
let btnAddAnonima=document.querySelector('#btnAddAnonima');
let btnAddOnClick=document.querySelector('#btnAddOnClick');
let bulb=document.querySelector('.bulb');
let body=document.querySelector('body');
let btnmouse=document.querySelector('#btnAddOnMouseover');
let btnAnimal=document.querySelector('#animal');
let btnAnimal2=document.querySelector('btnAnimal2')
let btnNombre=document.querySelector('#btnNombre');
btnAdd.addEventListener('click',cambiarCaja);
function cambiarCaja(){
    caja.style.background='#cc1234';
    caja.style.width='200px';
    caja.style.height='200px';
    caja.innerHTML='Hola';
    caja.style.color='white';
    caja.style.textAlign='center';
}
btnAddAnonima.addEventListener('click',function(){
    caja.style.background='#cc1234';
    caja.style.width='200px';
    caja.style.height='200px';
    caja.innerHTML='Adios';
    caja.style.color='white';
    caja.style.textAlign='center';
});
btnAddOnClick.onclick=cambiarCaja2;
function cambiarCaja2(){
    caja.style.background='#dd1234';
    caja.style.width='200px';
    caja.style.height='200px';
    caja.innerHTML='Que hizo';
    caja.style.color='white';
    caja.style.textAlign='center';
};
bulb.onclick=function(){
    bulb.src='img/apagado.png';
    body.style.background='black';

};
bulb.ondblclick=function(){
    bulb.src='img/encendido.jpeg';
    body.style.background='white';
};
btnmouse.onmouseover=function(){
    btnmouse.style.background='orange';
    btnmouse.style.width='600px'
    btnmouse.style.transitionProperty='color,background-color, width';
    btnmouse.style.transitionDuration='1s,1s,1s';
};
btnmouse.onmouseout=function(){
    btnmouse.style.background='red';
    btnmouse.style.width='300px'
    btnmouse.style.transitionProperty='color,background-color, width';
    btnmouse.style.transitionDuration='1s,1s,1s';
};
btnAnimal.onmouseover=function(){
    this.classList.add('animal');
};
btnAnimal.onmouseout=function(){
    this.classList.remove('animal');
};
btnNombre.onmouseover=function(){
    this.innerHTML='Yeison Calderon';
    this.classList.add('nombre');
}


