var propForm = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null,
    expresionRegular:null,
    validaciones: new Array()
}
var valForm = {
    valText:function(min,max,propVal,inpVal,menError,expresionRegular ){
       if(propVal.length < min || propVal.length > max || !expresionRegular.test(propVal) ){
           inpVal.innerHTML = '<span style="color:red">*Error al ingresar los datos: '+menError+'</span>';
           return false;
       }else{
           inpVal.parentNode.removeChild(inpVal);
          return true;
       }
    },
    valExpRegular:function(expresionRegular,propFormVal,inpVal,menError){
       if(!expresionRegular.test(propFormVal)){
           inpVal.innerHTML = '<span style="color:red">*Error al ingresar los datos: '+menError+'</span>';
           return  false;
       }else{
           inpVal.parentNode.removeChild(inpVal);
           return  true;
       }
    }
}






var metFormulario = {
   inicioFormulario: function(){
       for(var i = 0; i < propForm.entradas.length; i++){
           propForm.entradas[i].addEventListener("focus", metFormulario.inpFoco);
           propForm.entradas[i].addEventListener("blur", metFormulario.inpFueraFoco);  
           propForm.entradas[i].addEventListener("change", metFormulario.changeInput);   
       }   
    },
    
    

   inpFoco: function(input){
       propForm.valor = input.target.value;
      if(propForm.valor == ""){
            document.querySelector("#"+input.target.id).style.background = "rgba(255,0,0,.05)";
            document.querySelector("#"+input.target.id).style.borderBottom =  "4px solid gray ";
            document.querySelector("[for="+input.target.id+"] .obligatorio").style.display = 'block';
       }
       document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class","error")
   },
   


   inpFueraFoco: function(input){
        document.querySelector("#"+input.target.id).style.background = "white";
        document.querySelector("[for="+input.target.id+"] .obligatorio").style.display = 'none';
   },
   changeInput: function(input){
    let validar= false;
    propForm.valor = input.target.value;
    var tipo = input.target.type;
   console.log(tipo);
    
    switch(tipo){


            case "text":
                if(propForm.valor != ""){
                    propForm.expresionRegular = /^[a-zA-Z]+$/;
                    validar = valForm.valText(2,6,propForm.valor,document.querySelector("[for="+input.target.id+"] .error"),input.target.placeholder,propForm.expresionRegular);
                    propForm.validaciones["nombre"] = validar;
                }else{
                    document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                }
            break;



            case "password":
                if(propForm.valor != ""){
                    propForm.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
                    validar = valForm.valExpRegular(propForm.expresionRegular,propForm.valor,document.querySelector("[for="+input.target.id+"] .error"),input.target.placeholder)
                    propForm.validaciones["password"] = validar;
                }else{
                    document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                }
            break;




            case "email":
                if(propForm.valor != ""){
                    propForm.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    validar = valForm.valExpRegular(propForm.expresionRegular,propForm.valor,document.querySelector("[for="+input.target.id+"] .error"),input.target.placeholder)
                    propForm.validaciones["email"] = validar;
                }else{
                    document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                }
            break;




            case "date":
            if(propForm.valor != ""){
                var fecha = new Date(propForm.valor);
                if(fecha){
                    var y = fecha.getUTCFullYear();
                    var m = fecha.getUTCMonth()+1;
                    var d = fecha.getUTCDate();
                    var diaActual = new Date().getUTCDate();
                    var resultado =   m >= 0 && m < 12 && y > 1900 && y < 32768 && d > 0 && d <= diaActual ;
                    propForm.validaciones["fechaIng"] = resultado;
                    if(resultado){
                    document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                    }else{
                    document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: El formato correcto es dd/mm/yyyy la fecha no puede ser superior a la actual </span>';
                    }
                } 
            }else{
                document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: El formato correcto es dd/mm/yyyy </span>';
                propForm.validaciones["fechaIng"] = false;
            }
            break;
    }
    
    },
    validaTotal:function(arreglo){
        let resVal = false;
        for(var clave in arreglo) {
           if(arreglo[clave]== false){
               resVal = true;
               return resVal;
           }
        }
        return resVal;
    },
    
    
    valFormCompleto:function(){
        var valida = propForm.validaciones;
        let resultValidacion = false;
        if(valida.length<=0){
            resultValidacion = true;
        }else{
            resultValidacion = metFormulario.validaTotal(valida);
        }
        if(resultValidacion){
            resultado.style.display = "none"
            document.querySelector("#labelEnviar").innerHTML ='<span style="color:red">¡*Tiene errores en los datos que ha ingresado, favor revisar de nuevo.</span>';   
        }
    }    
}
metFormulario.inicioFormulario();


function uncheck(){
    debugger;
    var boletin1=document.getElementById('boletin1').checked,
        boletin2=document.getElementById('boletin2').checked;
    var opciones1=document.getElementById('opciones1').checked,
        opciones2=document.getElementById('opciones2').checked,
        opciones3=document.getElementById('opciones3').checked,
        opciones4=document.getElementById('opciones4').checked;
    var aceptar=document.getElementById('opciones').checked;
    var infoB=document.querySelector('.infoBoletin'),
        infoP=document.querySelector('.infoPrefer');
        infoA=document.querySelector('.infoA');
    function validaB(boletin1,boletin2) {
        if (boletin1==false && boletin2==false) {
            infoB.style.color='red';
            infoB.innerHTML='No ha seleccionado nada';
            return false;
        }else{
            infoB.style.display='none';
            return false;
        }
    }
    function validaO(opciones1,opciones2,opciones3,opciones4,) {
        if (opciones1==false && opciones2==false && opciones3==false && opciones4==false) {
            infoP.style.color='red';
            infoP.innerHTML='No ha seleccionado nada';
            return false;
        }else{
            infoP.style.display='none';
            return false;
        }
    }
    function validaA(aceptar){
        if (aceptar==false) {
            infoA.style.color='red';
            infoA.innerHTML='Debe aceptar los terminos';
            return false;
        }else{
            infoA.style.display='none';
            return false;
        }
    }
    function valFormul(){
        var contador;
        var user=document.getElementById('name');
        var pass=document.getElementById('password');
        var email=document.getElementById('password');
        var infoU=document.getElementById('infoUser'),
            infoPass=document.getElementById('infoPass'),
            infoEmail=document.getElementById('infoEmail'),
            infodate=document.getElementById('infodate');
        function valUser(){
            if (user.selectionStart<2 || user.selectionStart>6) {
                infoU.innerHTML='Digite entre 2 y 6 caracteres';
                contador++;
                infoU.style.color='red';
            }else{
                infoU.style.display='none';
            }
        };
        function valPass(){
            if (pass.value=="") {
                contador++;
                infoPass.innerHTML='Error al ingresar la contraseña';
                infoPass.style.color='red';
                infodate.innerHTML='Error al ingresar la fecha';
                infodate.style.color='red';
            }else{
                infoPass.style.display='none';
            }
        };
        function valEmail(){
            contador++;
            if (email.value=="") {
                infoEmail.innerHTML='Error al el email';
                infoEmail.style.color='red';
            }else{
                infoEmail.style.display='none';

            }
        };
    valUser();
    valPass();
    valEmail();
    };
    valFormul();
    validaA(aceptar);
    validaB(boletin1,boletin2);
    validaO(opciones1,opciones2,opciones3,opciones4);
    metFormulario.changeInput();
}
function logueo(propForm){
    debugger;
    var userL=document.getElementById('userLogin');
    var passL=document.getElementById('userPass');
    var infoBien=document.getElementById('bienvenido');
    if (userL.value==propForm.entradas[0] && passL.value==propForm.entradas[1]) {
        infoBien.innerHTML='Bienvenido';
    }else{
        infoBien.innerHTML='Datos incorrectos' ;
    }
}