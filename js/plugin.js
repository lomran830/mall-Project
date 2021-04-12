/* Jequery */
$(document).ready(function(){
    $("div.part1").hover(function(){
        $(".hide_part1").slideToggle();
    },function(){
        $(".hide_part1").fadeOut();
    })

    $("div.part2").hover(function(){
        $(".hide_part2").slideToggle();
    },function(){
        $(".hide_part2").fadeOut();
    })

    $("div.part3").hover(function(){
        $(".hide_part3").slideToggle();
    },function(){
        $(".hide_part3").fadeOut();
    })
    $("div.part4").hover(function(){
        $(".hide_part4").slideToggle();
    },function(){
        $(".hide_part4").fadeOut();
    })
    $("div.part5").hover(function(){
        $(".part5 .hide_part1").slideToggle();
    },function(){
        $(".part5 .hide_part1").fadeOut();
    })

    $("div.part6").hover(function(){
        $(".part6 .hide_part2").slideToggle();
    },function(){
        $(".part6 .hide_part2").fadeOut();
    })

    $("div.part7").hover(function(){
        $(".part7 .hide_part3").slideToggle();
    },function(){
        $(".part7 .hide_part3").fadeOut();
    })
    $("div.part8").hover(function(){
        $(".part8 .hide_part4").slideToggle();
    },function(){
        $(".part8 .hide_part4").fadeOut();
    })

    $(".back_Three .right").hover(function(){
        $(".back_Three .left .img_left2").fadeIn();
    },function(){
        $(".back_Three .left .img_left2").fadeOut();
    })

    $("#card").on("click",function(){
        $("#hello .hide").fadeToggle();
    })

    $("#buy").on("click",function(){
        $("#total").text("0$");
        $("img").removeClass("img_shadow");
        $(".mgs span").hide();
        $("#hello .hide").hide();
    })

    $("img").on("click",function(){
        $(".done").fadeOut()

    })
    $("#clear").on("click",function(){
      $(".mgs span").hide();
        $(this).parent().hide();
        $("#total").text("0$");
        $("#change").text("0");
        $("img").removeClass("img_shadow")
    })


})
$(".mgs span").on("click",function(){
    $(this).hide();
})

/* javascript */
 function close() {
  this.parentElement.childNodes[1].classList.remove("img_shadow");
    document.getElementById("change").innerHTML = document.getElementById("change").textContent - 1;
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").textContent) - parseInt(this.parentElement.childNodes[1].getAttribute("data-place"))
}
document.querySelector(".mg span").addEventListener("click",close)
document.querySelector(".mg2 span").addEventListener("click",close)
document.querySelector(".mg3 span").addEventListener("click",close)
document.querySelector(".mg4 span").addEventListener("click",close)
document.querySelector(".mg5 span").addEventListener("click",close)
document.querySelector(".mg6 span").addEventListener("click",close)
document.querySelector(".mg7 span").addEventListener("click",close)
document.querySelector(".mg8 span").addEventListener("click",close)
document.querySelector(".mg9 span").addEventListener("click",close)
document.querySelector(".mg10 span").addEventListener("click",close)
document.querySelector(".mg11 span").addEventListener("click",close)
document.querySelector(".mg12 span").addEventListener("click",close)
document.querySelector(".mg13 span").addEventListener("click",close)
document.querySelector(".mg14 span").addEventListener("click",close)
document.querySelector(".mg15 span").addEventListener("click",close)
document.querySelector(".mg16 span").addEventListener("click",close)
document.querySelector(".mg17 span").addEventListener("click",close)
document.querySelector(".mg18 span").addEventListener("click",close)
document.querySelector(".mg19 span").addEventListener("click",close)
document.querySelector(".mg20 span").addEventListener("click",close)
document.querySelector(".mg21 span").addEventListener("click",close)
document.querySelector(".mg22 span").addEventListener("click",close)
document.querySelector(".mg23 span").addEventListener("click",close)
document.querySelector(".mg24 span").addEventListener("click",close)

$("img:not(.hide_shadow)").on("click",function r(){
    $(this).next().show();
    $(this).addClass("img_shadow");
    var $change           = document.getElementById("change"),
        calculate             = parseInt($change.textContent),
        calculation           =  calculate + 1;
        $change.innerHTML = calculation;
        var totalPrice = document.getElementById("total"),
        summary = parseInt(totalPrice.textContent);
        summary += parseInt(this.getAttribute("data-place"))
        totalPrice.innerHTML= summary + "$";

})


let button = document.getElementById("scroll");
window.onscroll = function(){
if(window.pageYOffset >= 500){
    button.style.display = "block"
}
else{
    button.style.display = "none"
}
button.addEventListener("click",function(){
    window.scrollTo(0,0)
})
}

var Buy       = document.getElementById("buy"),
    donework  = document.getElementById("done");
Buy.addEventListener("click",function(){

    if(document.getElementById("change").textContent=="0"){
        document.getElementById("sorry").style.display  = "block";
    }else{
        donework.style.display = "block";
    }

    document.getElementById("change").innerHTML = "0";
    document.getElementById("pric").style.display = "none";
    document.getElementById("total").innerHTML = "0$";
    document.getElementById("hide").style.display = "none";
})


document.getElementById("search").onfocus = function(){
  'uset strict';
  /**Set placeholder in backup attr */
  this.setAttribute("data-place",this.getAttribute("placeholder"));
  this.setAttribute("placeholder","");


}

document.getElementById("search").onblur = function(){
  'uset strict';
  /**Set placeholder in backup attr */
  this.setAttribute("placeholder",this.getAttribute("data-place"));
  this.setAttribute("data-place","");
}

function searchInput(event) {
    ("use strict");
    var myPargraph = document.getElementById("parg");
    if (event.keyCode == 13) {
        if (
            /dresses/i.test(document.getElementById("search").value) ||
            /dress/i.test(document.getElementById("search").value) ) {
            open("dresses.html");
            myPargraph.style.display = "none";
        } else if (
    /sweaters/i.test(document.getElementById("search").value) ||
    /sweater/i.test(document.getElementById("search").value)
  ) {
    open("Sweaters.html");
    myPargraph.style.display = "none";
  } else if (
    /accessories/i.test(document.getElementById("search").value) ||
    /accessory/i.test(document.getElementById("search").value)
  ) {
    open("accessories.html");
    myPargraph.style.display = "none";
  } else if (
    /shoses/i.test(document.getElementById("search").value) ||
    /women/i.test(document.getElementById("search").value)
  ) {
    open("shoses.html");
    myPargraph.style.display = "none";
  } else if (
    /shoses/i.test(document.getElementById("search").value) ||
    /men/i.test(document.getElementById("search").value)
  ) {
    open("men-shoses.html");
    myPargraph.style.display = "none";
  } else if (
    /shoses/i.test(document.getElementById("search").value) ||
    /man/i.test(document.getElementById("search").value)
  ) {
    open("men-shoses.html");
    myPargraph.style.display = "none";
  } else if (
    /trousers/i.test(document.getElementById("search").value) ||
    /trouser/i.test(document.getElementById("search").value)
  ) {
    open("trouser.html");
    myPargraph.style.display = "none";
  } else if (
    /t-shirt/i.test(document.getElementById("search").value) ||
    /t-shirts/i.test(document.getElementById("search").value) ||
    /shirts/i.test(document.getElementById("search").value)
  ) {
    open("T-shirt.html");
    myPargraph.style.display = "none";
  } else if (
    (/girls/i.test(document.getElementById("search").value) ||
      /girl/i.test(document.getElementById("search").value)) &&
    (/children/i.test(document.getElementById("search").value) ||
      /childrens/i.test(document.getElementById("search").value) ||
      /child/i.test(document.getElementById("search").value) ||
      /childs/i.test(document.getElementById("search").value))
  ) {
    open("girlchild.html");
    myPargraph.style.display = "none";
  } else if (
    (/boys/i.test(document.getElementById("search").value) ||
      /boy/i.test(document.getElementById("search").value)) &&
    (/children/i.test(document.getElementById("search").value) ||
      /childrens/i.test(document.getElementById("search").value) ||
      /child/i.test(document.getElementById("search").value) ||
      /childs/i.test(document.getElementById("search").value))
  ) {
    open("boy.html");
    myPargraph.style.display = "none";
  } else {
    myPargraph.style.display = "block";
    myPargraph.innerHTML = "Sorry, We Don't Understand What You Need?!!";
    myPargraph.style.color = "#1ea6e4ad";
    myPargraph.style.marginLeft = "-47px";
        }
        console.log("Run");
        return true;
        
    }
    else{
        return true;
    }
}
// document.getElementById("search").enter = function () {

// };
document.getElementById("empty_close").onclick = function(){
  'use strict';
    document.getElementById("search").value = "";

}
