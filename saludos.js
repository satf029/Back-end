

const readline= require('readline');


//extrae los argumentos de la linea de comandos.
const args = process.argv.slice(2);
const commandsLenguage = ["-i","--idioma"];
const idiomasDisponibles = ["es","en","fr"];

//verifica que se pase algun argumento
if (args.length == 0){
    console.log("Error. Se debe pasar minimamente el nombre. El nombre es obligatorio");
    process.exit(1);
}


//verificar que el primer argumento sea el nombre y no el lenguaje 
if (commandsLenguage.includes(args[0]) | args[0].includes("-")){
    console.log("Error. Formato Incorrecto. El nombre es obligatorio");
    process.exit(1);
}


// Obtenemos todos los campos de los argumentos
let nombre = args[0];
let comando = args[1];
let idioma = args[2];

// console.log(nombre, comando,);
//puede que solo se pase el nombre, por lo que debemos verificar que solo en los casos 
// en donde se pasan mas argumentos que el nombre se realice la verificacion

if (args.length != 1){
    //Verificamos que la bandera sea correcta
    if ( !commandsLenguage.includes(comando)){
        console.log("Error. Bandera inexistente. Banderas disponibles:");
        console.log(" -i --idioma");
        process.exit(1);
    }
    //verificamos el idioma, si no esta entre los idiomas disponibles agrega español por defecto
    if (!idiomasDisponibles.includes(idioma)){
        console.log("Error. Idioma no disponible");
        idioma = "es";
    }
}else{ //si solo se pasa el nombre, retorna en español por defecto
    idioma = "es";
}
// Verificamos que todos los campos se encuentren 
const saludar ={
    es : `¡Hola, ${nombre}! Bienvenido/a a Node.js`,
    en : `Hello, ${nombre}! Welcome to Node.js.`,
    fr : `Bonjour, ${nombre}! Bienvenue à Node.js.`
}

console.log(saludar[idioma]);




