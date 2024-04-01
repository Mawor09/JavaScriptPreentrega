function calcularTip(){
    let montoTotal= parseInt(prompt("Ingrese el valor del subtotal"));
    let propina=parseInt(prompt("Ingrese el valor de la propina 10%,15%,20%,otro"));
    let diez = montoTotal*0.1;
    let quince = montoTotal*0.15;
    let veinte = montoTotal*0.2;
    let otro = montoTotal*(propina/100);



    if(propina==10){
        console.log("Valor a propina "+diez +" Muchas gracias");
    }else if(propina==15){
        console.log("Valor a propina "+quince +" Mi Dios le pague");
    }else if(propina==20){
        console.log("Valor a propina "+veinte +" Quiere que le baile");
    }else if(propina>=10){
        console.log("Valor a propina "+otro +" Usted esta muy lindo");
    }else
        while(propina < 10){
        console.log("Tengo una familia que alimentar, pero igual la propina esta incluida "+propina);
        propina++
    }
    console.log("Valor Total "+(montoTotal+propina));
    }
