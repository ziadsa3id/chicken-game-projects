
// var boxleft=0
// var boxup=0
// var box = document.querySelector('.container')
// document.addEventListener('keydown' , function (e) {
//     // console.log(e);
// if (e.code == 'ArrowRight') {
//     boxleft+=50
//     box.style.left = boxleft + "px"

// }else if(e.code == 'ArrowUp'){
//     boxup+=50
//     box.style.bottom = boxup + "px"
// }else if (e.code == 'ArrowDown' ){

// boxup-=50
//     box.style.bottom = boxup + "px"

// }
// else if (e.code == 'ArrowLeft') {
//     boxleft-=50
//     box.style.left = boxleft + "px"

// }else if(e.code=="Space"){

//     cube.style.bottom=600 +'px'; 
//     cube.style.opacity =1 ;

// }
//     })

// var cubeleft=0 
// var cubebottom=0 

//     var cube = document.querySelector('.type')
// document.addEventListener('keyup' , function (e){
// if (e.code == 'Space') {
//     cube.style.bottom=50  +'px'; 
//     cube.style.opacity =0 ;
    
// }

// })


for(var i=1; i<=108 ;i++){
images.innerHTML += "<div><img src='("+i+").png'</div>";
}



var box = document.getElementById("box")
var boxLeft = 0
var boxBottom = 0
var x = document.getElementById('x')

document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.code == "ArrowUp") {
        boxBottom += 100
        box.style.bottom = boxBottom + "px"
    }
    else if (e.code == "ArrowDown") {
        boxBottom -= 100
        box.style.bottom = boxBottom + "px"
    }
    else if (e.code == "ArrowRight") {
        boxLeft += 100
        box.style.left = boxLeft + "px"
    }
    else if (e.code == "ArrowLeft") {
        boxLeft -= 100
        box.style.left = boxLeft + "px"
    } else if (e.code == "Space") {
        x.style.transition = 1 + "s"
        x.style.bottom = 500 + "px"
        x.style.opacity = 1

    }
})
document.addEventListener("keyup", function (e) {
    if (e.code == "Space") {
        x.style.bottom = 160 + "px"
        x.style.transition = 1 + "s"
        x.style.opacity = 0

    }
})
