$(document).ready(function() {
    var display=$(".input-display");
    $("input[type='button']").click(function(){
        var value=$(this).val();
    if (value === "AC"){
        display.val("");
    }
    else if(value=="DE"){
        var currentValue =display.val();
        display.val(currentValue.slice(0,-1));
    }
    else if(value==="="){
        var result=eval(display.val());
        display.val(result);
    }
    else{
        display.val(display.val()+value);
    }
    })
   
});