'use strict'
let caja=document.getElementById('cja');
let caja2=document.getElementsByClassName('cajas');
let caja3=document.getElementsByTagName('div');
let caja4=document.querySelector('#cja');
let caja5=document.querySelector('.cajas');
let caja6=document.querySelectorAll('.cajas');
let principal=document.querySelector('principal');
let hr=document.createElement('hr');
let box=document.querySelector('.float');

console.log('query selector por id: ',caja4);
console.log('query selector por clase: ',caja5);
console.log(caja3);
console.log(caja6);
let colores=['yellow','red','blue','green','purple','pink','brown','#ff43','#ddccff','#e60000'];
console.log(caja);
console.log(caja2);
caja.style.width='100px';
caja.style.height='100px';
caja.style.background='Gray';
caja.style.color="white";
caja.style.textAlign='center';
caja.innerHTML='Partes del DOM';

// caja2[3].style.width='100px';
// caja2[3].style.height='100px';
// caja2[3].style.background='Gold';
// caja2[3].style.innerHTML='Arreglo de cajas 3';

for (const key in caja2) {
    caja2[key].innerHTML=key;
    //caja2[key].style.padding='3px';
    caja2[key].style.lineHeigth='7'
    caja2[key].style.fontSize='80px';
    caja2[key].style.color='white';
   caja2[key].style.width="200px";
   caja2[key].style.height="200px";
   caja2[key].style.background=colores[key];
   caja2[key].style.display='inline-block';
   caja2[key].style.margin='10px';
};
box.style.clear='both';
box.innerHTML='Donde esta';
box.style.background='red';
box.style.width='30px';
box.style.height='30px';
principal.append(hr);
