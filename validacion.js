//Haz tú validación en javascript acá
const input_nombre = document.querySelector('input[name="nombre"]');
const input_email = document.querySelector('input[name="email"]');
const input_asunto = document.querySelector('input[name="asunto"]');
const textarea_mensaje = document.querySelector('textarea[name="mensaje"]');
var isValidNombre = false; var isValidEmail = false; var isValidAsunto = false; var isValidMensaje = false; 
var bool_isVisiblebtnEnviar = true;
var button_Enviar = document.querySelector('button[id="Enviar"]');

input_nombre.addEventListener("input",function(evt){
    //console.log(evt);
    //console.log(input_nombre.value.trim().length);
    if(input_nombre.value.trim().length === 0){
        input_nombre.setCustomValidity("Campo Nombre no debe estar en blanco o vacío.");
    }
    else
    if(input_nombre.value.trim().length > 50){
        input_nombre.setCustomValidity("Campo Nombre debe contener máximo 50 caracteres.");
    }
    else
    isValidNombre = true;
    input_nombre.reportValidity();
});

input_email.addEventListener("input", function(evt){
    if(input_email.value === ""){
        input_email.setCustomValidity("Campo E-mail no debe estar en blanco o vacío.");
    }
    else
        if(!validateEmail(input_email.value)){
            input_email.setCustomValidity("Introduzca un E-mail valido.")
        }
        else
        isValidEmail = true;
    input_email.reportValidity();
});

input_asunto.addEventListener("input",function(evt){
    //console.log(evt);
    //console.log(input_asunto.value.trim().length);
    if(input_asunto.value.trim().length === 0){
        input_asunto.setCustomValidity("Campo Asunto no debe estar en blanco o vacío.");
    }
    if(input_asunto.value.trim().length > 50){
        input_asunto.setCustomValidity("Campo Asunto debe contener máximo 50 caracteres.");
    }
    else
    isValidAsunto = true;
    input_asunto.reportValidity();
});

textarea_mensaje.addEventListener("input",function(evt){
    //console.log(evt);
    console.log(textarea_mensaje.value.trim().length);
    if(textarea_mensaje.value.trim().length === 0){
        textarea_mensaje.setCustomValidity("Campo Mensaje no debe estar en blanco o vacío.");
    }
    else
    if(textarea_mensaje.value.trim().length > 50){
        textarea_mensaje.setCustomValidity("Campo Mensaje debe contener máximo 300 caracteres.");
    }
    else
    isValidMensaje = true;
    textarea_mensaje.reportValidity();
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

button_Enviar.addEventListener("mouseover", function(evt){
    console.log(input_nombre.reportValidity());
    if (isValidNombre && isValidEmail && isValidAsunto && isValidMensaje){
        button_Enviar.disabled = false;
    }
});

