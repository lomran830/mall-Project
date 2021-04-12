$(document).ready(function(){
$(".register").on("click",function(){
    $(".form_log").hide(function(){
        $(".form_register").show();
    });
    $("h2").hide();
    $(".show").show();


})
$(".log").on("click",function(){
    $(".form_register").hide(function(){
        $(".form_log").show();
    });
    $("h2").hide();
    $(".hide").show();
})
})

function validate(){
    var name     = document.getElementById("input_user").value,
        email    = document.getElementById("input_email").value,
        password = document.getElementById("pass").value,
        phone = document.getElementById("input_phone").value,
        message = document.getElementById("error_message"),
        $area    = document.getElementById("textArea").value,
        text;
        if(name.trim() == "" && email.trim() == "" && password.trim() == "" && phone.trim() == "" && $area.trim() == ""){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validation Form`;
            message.innerHTML = text;
            return false
        }
        if(name.trim() == "" || name.length < 4){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validate User`;
            message.innerHTML = text;
            return false
        }
        if(email.indexOf("@") == -1 || email.length < 10 || email.indexOf(".") == -1){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validate Email`;
            message.innerHTML = text;
            return false
        }
        if(isNaN(phone) || phone.length != 11){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validate Phone Number`;
            message.innerHTML = text;
            return false
        }
        if(password.length < 3){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validate Password`;
            message.innerHTML = text;
            return false
        }
        if($area.trim() == "" || $area.length <= 1){
            text = `<i class="fas fa-exclamation-triangle"></i> Please Write Message`;
            message.innerHTML = text;
            return false
        }
        if($area.length < 10){
            text = `<i class="fas fa-exclamation-triangle"></i> Please Write Message more than that`;
            message.innerHTML = text;
            return false
        }
    }
function validation(){
    var name     = document.getElementById("user").value,
        password = document.getElementById("passw").value,
        $area    = document.getElementById("Area").value,
         message = document.getElementById("error_message"),
        text;
        if(name.trim() == "" && password.trim() == "" && $area.trim() == ""){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validation Form`;
            message.innerHTML = text;
            return false
        }
        if(name.trim() == "" || name.length < 4){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validate User`;
            message.innerHTML = text;
            return false
        }
        if(password.length < 3){
            text = `<i class="fas fa-exclamation-triangle"></i> Enter Validate Password`;
            message.innerHTML = text;
            return false
        }

        if($area.trim() == "" || $area.length < 2){
            text = `<i class="fas fa-exclamation-triangle"></i> Please, Write Message`;
            message.innerHTML = text;
            return false
        }
        if($area.length < 10){
            text = `<i class="fas fa-exclamation-triangle"></i> Please, Write Message more than that`;
            message.innerHTML = text;
            return false
        }
            return true;
    }

var  inputFirst = document.getElementById("input_user");
    inputSecond = document.getElementById("input_email"),
    inputThird  = document.getElementById("input_phone"),
    inputfourth = document.getElementById("pass"),
    inputFive   = document.getElementById("user"),
    inputSix    = document.getElementById("passw"),
    area        = document.getElementById("textArea"),
    $areaMessag = document.getElementById("Area")


inputFirst.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
inputFirst.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}
inputSecond.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
inputSecond.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}
inputThird.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
inputThird.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}
inputfourth.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
inputfourth.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}
inputFive.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
inputFive.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}
inputSix.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
inputSix.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}
area.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}
area.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}

$areaMessag.onfocus = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("data-place",this.getAttribute("placeholder"));
this.setAttribute("placeholder","");
}

$areaMessag.onblur = function(){
'uset strict';
/**Set placeholder in backup attr */
this.setAttribute("placeholder",this.getAttribute("data-place"));
this.setAttribute("data-place","")
}


var input = document.getElementById("pass"),
    myButton  = document.getElementById("button_eye"),
    con = document.getElementById("eye");
myButton.onclick = function(){

        var element = document.getElementById("eye")
        element.classList.toggle("active");

        (input.type == "password") ? input.type = "text" : input.type="password";
}

var password = document.getElementById("passw"),
    icono  = document.getElementById("parent-eye")

    icono.onclick = function(){

        var second = document.getElementById("eye_second")
        second.classList.toggle("active");

        (password.type == "password") ? password.type = "text" : password.type="password";
}


var text   = "Top Fun. for Clothes and Accessories for All Ages, Follow us To The Latest Products",
    effict = document.getElementById("type"),
    i      = 0;

    var typewriter = setInterval(function(){
        effict.textContent += text[i];
        i =i + 1;
        if(i > text.length -1)
        {
            clearInterval(typewriter)
        }
        var sp =document.createElement("span");
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "#type span{ border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
        effict.appendChild(sp);
        setInterval(function(){
        sp.classList.toggle("show");
},200)
    },100)





// document.addEventListener("contextmenu",function(e){
//     'use strict';
//     e.preventDefault();
// })
