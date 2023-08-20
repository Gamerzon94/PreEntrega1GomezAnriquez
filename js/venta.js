let nombre = '';

let opcion = '';

let animatronico = '';

let dias = '';

let valido = 0;

let menu = `1.- Rentar un animatronico.
2.- [NUEVA OPCIÓN] ¿Para que me alcanzá?
3.- Consultar puntos de distribución.
4.- Limpiar consola.
5.- Finalizar.
`;

let menuAnimatronicos = `1.- Freddy Fazbear $1.000 x dia
2.- Bonnie $1400 x dia
3.- Chica $1700 x dia
4.- Foxy $800 x dia
`;

function rentarAnimatronico(valor, dias){
    if(valor==1){
        console.log("Usted tendra a Freddy Fazbear por "+dias+" dia(s) por el valor de: $"+1000*dias);
        console.log(menu);
    }else if(valor==2){
        console.log("Usted tendra a Bonnie por "+dias+" dia(s) por el valor de: $"+1400*dias);
        console.log(menu);
    }else if(valor==3){
        console.log("Usted tendra a Chica por "+dias+" dia(s) por el valor de: $"+1700*dias);
        console.log(menu);
    }else if(valor==4){
        console.log("Usted tendra a Foxy por "+dias+" dia(s) por el valor de: $"+800*dias);
        console.log(menu);
    }else{
        console.log("Usted no ha seleccionado una opcion valida, será enviado al menu.");
        console.log(menu);
    }
}

nombre = prompt("Bienvenido nuevo usuario, por favor dime tu nombre");

console.log(` _____        _                       _____      _            _        _                            _       _____
|  ___|      | |                     |  ___|    | |          | |      (_)                          | |     |_   _|
| |_ __ _ ___| |__   ___  __ _ _ __  | |__ _ __ | |_ ___ _ __| |_ __ _ _ _ __  _ __ ___   ___ _ __ | |_      | | _ __   ___
|  _/ _\` |_  / '_ \\ / _ \\/ _\` | '__| |  __| '_ \\| __/ _ \\ '__| __/ _\` | | '_ \\| '_ \` _ \\ / _ \\ '_ \\| __|     | || '_ \\ / __|
| || (_| |/ /| |_) |  __/ (_| | |    | |__| | | | ||  __/ |  | || (_| | | | | | | | | | |  __/ | | | |_ _   _| || | | | (__ 
\\_| \\__,_/___|_.__/ \\___|\\__,_|_|    \\____/_| |_|\\__\\___|_|   \\__\\__,_|_|_| |_|_| |_| |_|\\___|_| |_|\\__( )  \\___/_| |_|\\___|
                                                                                                       |/

Bienvenido(a) `+nombre+` a nuestro sistema de elección de animatronicos, elige el animatronico que deseas agregar:
`+menu);

while (opcion != 5){
    opcion = prompt('Indicanos tu opción: ');
    if(opcion==1){
        console.log("1");
        valido = 0;
        while(valido==0){
            console.log(menuAnimatronicos);
            animatronico=prompt("Ingrese el animatronico que desea rentar:");
            dias=prompt("Ingrese la cantidad de dias que desea rentar:");
            if(!isNaN(animatronico)&&!isNaN(dias)){
                if(dias>0){
                    rentarAnimatronico(animatronico,dias);
                    valido = 1;
                }else{
                    console.log("La cantidad de dias no puede ser negativo, intentelo de nuevo.");
                }
            }else{
                console.log("Una de las opciones ingresadas no son validas, intentelo de nuevo.");
            }
        }
    }else if(opcion==2){
        console.log("2");
    }else if(opcion==3){
        console.log("3");
    }
    else if(opcion==4){
        console.clear();
    }else if(opcion==5){
        console.log("!Les agradecemos su visita y esperamos que hayan disfrutado de nuestros animatronicos! Recuerde que junto con la firma del contrato legal con el que nos libera de toda la responsabilidad por lo que podría ocurrir tendra unos lentes novedosos y un vale por una recarga gratis en cualquiera de nuestros locales. !Que tenga una maravillosa noche y nos vemos pronto!");
    }else{
        console.log("Opción no valida, intentelo de nuevo.")
    }
}