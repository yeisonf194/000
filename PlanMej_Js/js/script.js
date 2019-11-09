function uncheck(){
    function valFormul(){
        var nombre=document.getElementById('nombre'),
            apellido=document.getElementById('apellido'),
            documento=document.getElementById('documento'),
            correo=document.getElementById('correo');
            telefono=document.getElementById('telefono'),
            clave=document.getElementById('clave'),
            confirmaclave=document.getElementById('confirmaclave');
        

        var infonombre=document.getElementById('infonombre'),
            infoapellido=document.getElementById('infoapellido'),
            infodocumento=document.getElementById('infodocumento'),
            infotelefono=document.getElementById('infotelefono'),
            infocorreo=document.getElementById('infocorreo'),
            infoclave=document.getElementById('infoclave'),
            infoclaveconfirma=document.getElementById('infoclaveconfirma');

            debugger;
            if(!isNaN(nombre.value)){
                infonombre.innerHTML='Nombre Invalido';
                infonombre.style.color='red';
            }else{
                if(nombre.selectionStart<3 || nombre.selectionStart>50){
                    infonombre.innerHTML='Nombre Invalido';
                    infonombre.style.color='red';  
                }else{
                    infonombre.style.display='none';
                }
            }
            if(!isNaN(apellido.value)){
                infoapellido.innerHTML='Apellido Invalido';
                infoapellido.style.color='red';
            }else{
                if(apellido.selectionStart<4 || apellido.selectionStart>50){
                    infoapellido.innerHTML='Apellido Invalido';
                    infoapellido.style.color='red';  
                }else{
                    infoapellido.style.display='none';
                }
            }
            if(isNaN(documento.value)){
                infodocumento.innerHTML='Documento Invalido';
                infodocumento.style.color='red';
            }else{
                if(documento.selectionStart<8 || documento.selectionStart>10){
                    infodocumento.innerHTML='Documento Invalido';
                    infodocumento.style.color='red';  
                }else{
                    infodocumento.style.display='none';
                }
            }if(documento.value==""){
                infocorreo.innerHTML='Correo Invalido';
                infocorreo.style.color='red';
            }else{
               infocorreo.style.display='none';
            }
            if(isNaN(telefono.value)){
                infotelefono.innerHTML='Telefono Invalido';
                infotelefono.style.color='red';
            }else{
                if(telefono.selectionStart!=10){
                    infotelefono.innerHTML='Telefono Invalido';
                    infotelefono.style.color='red';  
                }else{
                    infotelefono.style.display='none';
                }
            }
            if(clave.value!=confirmaclave.value){
                infoclaveconfirma.innerHTML='Contraseñas no coinciden';
                infoclaveconfirma.style.color='red';
            }else{
                infoclaveconfirma.style.display='none';
            }
    };
    valFormul();
}