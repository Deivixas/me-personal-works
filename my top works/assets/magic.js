$(document).ready(function(){

// variables
 $surface =$('.surface');
$car = $('.car');
$img=$('.car img');

let flag= true;

const cars = ["./Img_05.png",'./Img_06.png'];

//  keypress event

$(document).on ('keypress',function(e){
if(e.which==32){
    $($surface).toggleClass('moveRight')
    $($car).toggleClass('suspension')
}
})

// lights

$(document).on ('keypress',function(e){

if (e.which==119){
    if(flag){
        flag = false;
        $img.attr("src",cars[0])
    } else {
        flag=true;
        $img.attr("src",cars[1])
    }
}

})




})
