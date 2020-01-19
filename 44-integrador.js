// Flor, excelente trabajo! Hay detalles que te voy mencionando,pero en general todo funciona
// correctamente, el codigo es prolijo y claro, y demuestra la comprension de los temas vistos. 
// Felicitaciones!

// Un comentario a tener en cuenta es tratar de borrar los console log antes de entregar
// un trabajo. Se considera un error tenerlos en un programa listo, ya que un usuario podria verlos. 

// Hay bastante codigo repetido que podria evitarse en el momento en que el usuario dice 
// que no desea repetir la operacion. Si pusieramos el prompt de "Que operacion desea realizar"
// al comienzo del while !== salir, en lugar de hacerlo en el otro, se podria evitar
// Es decir, si escribimos esto:
// while (operacion !== "SALIR") {
    // operacion = prompt(`Qué operación desea realizar?
    // 👤  CREAR
    // 🔎  BUSCAR
    // 📄  LISTAR
    // ✏️  MODIFICAR
    // 🗑️  ELIMINAR
    // 🚪  SALIR
    // `);

// Despues podriamos escribir algo asi:
//         if (continuar === "NO") {
//            operacion = ""
//         }
// Sin la necesidad de repetir todo el codigo del menu. 


// Con respecto al problema de la repeticion en el for de buscar, es imposible lograr que ese
// alerta no se repita si la escribimos adentro del for (porque justamente, lo que hace el for
// es repetir la ejecucion del codigo en cada vuelta)
// La solucion es usar una variable "bandera" que comentamos un par de veces en clase. La variable 
// empieza en false, y solo cambia a true si hay una coincidencia. Despues esa variable nos sirve
// afuera del for, para mostrar el alerta
// Asi:

// let usuarioEncontrado = false 
// let usuarioAMostrar = []

// for (let i = 0; i < usuarios.length; i++) {
//     for (let j = 0; j < usuarios[i].length; j++) {
//         if (usuarios[i][j] === datoABuscar) {
//             usuarioAMostrar = usuarios[i]
//             usuarioEncontrado = true
//         }
//     };
// };
// if (usuarioEncontrado) {
// alert(`Buscaste al siguiente usuario:        
//             🆔   ID: ${usuarioAMostrar[0]}
//             👤  Nombre: ${usuarioAMostrar[1]}
//             📞  Celular: ${usuarioAMostrar[2]}
//             📮  Mail: ${usuarioAMostrar[3]}
//             `);
// }
// else {
//     alert("No existe el usuario solicitado ❗");
// }

// Lee el codigo de arriba tranqui y si hay dudas me escribis. 


// Con respecto al comentario de haber escrito los usuarios a mano: tenes razon, 
// seria mejor que este codigo se pudiera hacer "solo" sin escribirlos uno por uno, 
// y ademas serviria independientemente de la cantidad de usuarios. 

// La solucion es hacer una variable "acumuladora" similar a la que hicimos para 
// el ejercicio de la suma parcial. 
// Es decir: empezamos con una variable que no es mas que un string vacio. 
// En cada vuelta del for, le agregamos a esa variable los datos del usuario que estamos recorriendo
// "acumulando" en esa variable, cada uno de los datos. 
// Al final del for, mostramos el resultado final

// Te lo muestro primero con un array normal
        // let arrayDeNombres = ["Carla", "Pedro", "Lucas", "Ana"]
        // let fraseAMostrar = ""
        // for (let i = 0; i < arrayDeNombres.length; i++) {
        //     fraseAMostrar = fraseAMostrar + arrayDeNombres[i]   
        // }
// Al final de ese for, "fraseAMostrar" sera igual a "CarlaPedroLucasAna"

// Ahora lo complicamos un poco mas con el array de usuarios
// let fraseAMostrar = ""
// for (let i = 0; i < usuarios.length; i++) {
//         fraseAMostrar = fraseAMostrar + `
//         ID: ${usuarios[i][0]}
//         Nombre: ${usuarios[i][1]}`
// }

// Asi funcionaria independientemente de la cnatidad de usuarios que haya. 







// LISTA DE USUARIOS PRECARGADOS

const usuarios = [
    [0, "Carla", 1545628984, "carla@gmail.com"],
    [1, "Pedro", 1545251245, "pedro@gmail.com"],
    [2, "Lucas", 1523357849, "lucas@gmail.com"],
    [3, "Ana", 15789456, "ana@gmail.com"],
];

console.log(usuarios);


// MENU - OPERACIONES

let operacion = "";

alert("Bienvenid@! 😊")

operacion = prompt(`Qué operación desea realizar?

👤  CREAR
🔎  BUSCAR
📄  LISTAR
✏️  MODIFICAR
🗑️  ELIMINAR
🚪  SALIR

`);

console.log(operacion);


// SALIR

while (operacion === "SALIR") {

    confirmar = prompt(`Está seguro que desea salir del programa?
        
    SI ✔️ - NO ❌
    
    `);

    if (confirmar === "SI") {
        
        alert("Hasta luego! 👋");

        break;

    } else {

        operacion = prompt(`Qué operación desea realizar?

        👤  CREAR
        🔎  BUSCAR
        📄  LISTAR
        ✏️  MODIFICAR
        🗑️  ELIMINAR
        🚪  SALIR
        
        `);

        console.log(operacion);

    };
};

// CREAR USUARIO

while (operacion !== "SALIR") {
    
    if (operacion === "CREAR") {
        
        let nuevoUsuarioNombre = prompt("Por favor, ingrese el nombre del usuario:")
        let nuevoUsuarioTel = prompt("Por favor, ingrese el teléfono del usuario:")
        let nuevoUsuarioMail = prompt("Por favor, ingrese el mail del usuario:")
        
        nuevoUsuarioTel = Number(nuevoUsuarioTel)
        
        let confirmar = prompt(`Usted ingresó: 
        
        👤  ${nuevoUsuarioNombre}
        📞  ${nuevoUsuarioTel}
        📮  ${nuevoUsuarioMail}

        Desea confirmar la operación? 
        
        SI ✔️ - NO ❌
    
        `);

        console.log(confirmar);

        if (confirmar === "SI") {

            let nuevoUsuarioID = usuarios.length;

            console.log(nuevoUsuarioID);
            
            usuarios.push([nuevoUsuarioID, nuevoUsuarioNombre, nuevoUsuarioTel, nuevoUsuarioMail]);

            console.log(usuarios);

        } else {
    
            alert("La operación fue cancelada");

        };

        continuar = prompt(`Desea repetir la operación?

        SI ✔️ - NO ❌
    
        `);

        console.log(continuar);

        if (continuar === "NO") {

            operacion = prompt(`Qué operación desea realizar?

            👤  CREAR
            🔎  BUSCAR
            📄  LISTAR
            ✏️  MODIFICAR
            🗑️  ELIMINAR
            🚪  SALIR
            
            `);

            console.log(operacion);
            
            if (operacion === "SALIR") {

                confirmar = prompt(`Está seguro que desea salir del programa?
        
                SI ✔️ - NO ❌
                
                `);

                if (confirmar === "SI") {
                    
                    alert("Hasta luego! 👋");

                } else {

                    operacion = prompt(`Qué operación desea realizar?

                    👤  CREAR
                    🔎  BUSCAR
                    📄  LISTAR
                    ✏️  MODIFICAR
                    🗑️  ELIMINAR
                    🚪  SALIR
                    
                    `);
                };
            };
        };
    };


// BUSCAR USUARIO

    if (operacion === "BUSCAR") {

        let buscarTipoDato = prompt(`Qué parámetro desea buscar?
        
        🆔   ID
        👤  NOMBRE
        📞  CELULAR
        📮  EMAIL
        
        `);

        if (buscarTipoDato === "ID" || buscarTipoDato === "CELULAR" ) {
        
            console.log(buscarTipoDato);

            let datoABuscar = prompt(`Ingrese el dato que desea buscar:`);

            datoABuscar = Number(datoABuscar);

            console.log(datoABuscar);

            for (let i = 0; i < usuarios.length; i++) {
                
                for (let j = 0; j < usuarios[i].length; j++) {

                    if (usuarios[i][j] === datoABuscar) {

                        console.log(`Buscaste al siguiente usuario:
                        ID: ${usuarios[i][0]}
                        Nombre: ${usuarios[i][1]}
                        Celular: ${usuarios[i][2]}
                        Mail: ${usuarios[i][3]}`);
                        
                        alert(`Buscaste al siguiente usuario:
                        
                        🆔   ID: ${usuarios[i][0]}
                        👤  Nombre: ${usuarios[i][1]}
                        📞  Celular: ${usuarios[i][2]}
                        📮  Mail: ${usuarios[i][3]}
                        
                        `);

                        break;

                    } else {

                        // MALE, no se como hacer para no que aparezca cada vez 
                        // que da la vuelta del for, si lo saco afuera del for
                        // no se como matchear usuarios !== datoABuscar

                        console.log("No existe el usuario solicitado");

                        alert("No existe el usuario solicitado ❗");

                        break;

                    };
                };
            };

        } else if (buscarTipoDato === "NOMBRE" || buscarTipoDato === "EMAIL" ) {

            console.log(buscarTipoDato);

            let datoABuscar = prompt(`Ingrese el dato que desea buscar:`);

            console.log(datoABuscar);

            for (let i = 0; i < usuarios.length; i++) {
                
                for (let j = 0; j < usuarios[i].length; j++) {

                    if (usuarios[i][j] === datoABuscar) {

                        console.log(`Buscaste al siguiente usuario:
                        ID: ${usuarios[i][0]}
                        Nombre: ${usuarios[i][1]}
                        Celular: ${usuarios[i][2]}
                        Mail: ${usuarios[i][3]}`);
                        
                        alert(`Buscaste al siguiente usuario:
                                            
                        🆔   ID: ${usuarios[i][0]}
                        👤  Nombre: ${usuarios[i][1]}
                        📞  Celular: ${usuarios[i][2]}
                        📮  Mail: ${usuarios[i][3]}
                        
                        `);

                        break;

                    } else if (usuarios[i][j] !== datoABuscar) {

                        // MALE, no se como hacer para no que aparezca cada vez 
                        // que da la vuelta del for, si lo saco afuera del for
                        // no se como matchear usuarios !== datoABuscar

                        console.log("No existe el usuario solicitado");

                        alert("No existe el usuario solicitado ❗");

                        break;
                    };
                };
            };
        
        } else {

            console.log("parametro incorrecto");
            
            alert("Ud no ingresó ningún parámetro válido ❗");
           
        };

        continuar = prompt(`Desea repetir la operación?

        SI ✔️ - NO ❌
    
        `);

        console.log(continuar);

        if (continuar === "NO") {

            operacion = prompt(`Qué operación desea realizar?

            👤  CREAR
            🔎  BUSCAR
            📄  LISTAR
            ✏️  MODIFICAR
            🗑️  ELIMINAR
            🚪  SALIR
            
            `);

            console.log(operacion);

            if (operacion === "SALIR") {

                confirmar = prompt(`Está seguro que desea salir del programa?
        
                SI ✔️ - NO ❌
                
                `);

                if (confirmar === "SI") {
                    
                    alert("Hasta luego! 👋");

                } else {

                    operacion = prompt(`Qué operación desea realizar?

                    👤  CREAR
                    🔎  BUSCAR
                    📄  LISTAR
                    ✏️  MODIFICAR
                    🗑️  ELIMINAR
                    🚪  SALIR
                    
                    `);

                    console.log(operacion);

                };
            };  
        };
    };


// LISTAR USUARIO

    if (operacion === "LISTAR") {

        // MALE, no se me ocurrio como hacer el correlativo,
        // sin tener que escribir 4 veces los usuarios,
        // me imagino que si tenes 100 usuarios no se pone uno por uno...

        for (let i = 0; i < 1; i++) {
            
            for (let j = 0; j < 1; j++) {
                
                alert(`
                🆔   ID: ${usuarios[i][j]}
                👤  NOMBRE: ${usuarios[i][j+1]}
                
                🆔   ID: ${usuarios[i+1][j]}
                👤  NOMBRE: ${usuarios[i+1][j+1]}
                
                🆔   ID: ${usuarios[i+2][j]}
                👤  NOMBRE: ${usuarios[i+2][j+1]}
                
                🆔   ID: ${usuarios[i+3][j]}
                👤  NOMBRE: ${usuarios[i+3][j+1]}`);

                break;

            };
        };

        continuar = prompt(`Desea repetir la operación?

        SI ✔️ - NO ❌
    
        `);

        console.log(continuar);

        if (continuar === "NO") {

            operacion = prompt(`Qué operación desea realizar?

            👤  CREAR
            🔎  BUSCAR
            📄  LISTAR
            ✏️  MODIFICAR
            🗑️  ELIMINAR
            🚪  SALIR
            
            `);

            console.log(operacion);

            if (operacion === "SALIR") {

                confirmar = prompt(`Está seguro que desea salir del programa?
        
                SI ✔️ - NO ❌
                
                `);

                if (confirmar === "SI") {
                    
                    alert("Hasta luego! 👋");

                } else {

                    operacion = prompt(`Qué operación desea realizar?

                    👤  CREAR
                    🔎  BUSCAR
                    📄  LISTAR
                    ✏️  MODIFICAR
                    🗑️  ELIMINAR
                    🚪  SALIR
                    
                    `);

                    console.log(operacion);

                };  
            };
        };
    };


// MODIFICAR USUARIO

    if (operacion === "MODIFICAR") {

        let IDAModificar = prompt(`Qué ID desea modificar?`);

        IDAModificar = Number(IDAModificar);

        console.log(IDAModificar);

        for (let i = 0; i < usuarios.length; i++) {
            
            for (let j = 0; j < usuarios[i].length; j++) {
                
                if (usuarios[i][j] === IDAModificar) {
                    
                    let nombreAModificar = prompt("Por favor, ingrese el nuevo nombre");
                    let telAModificar = prompt("Por favor, ingrese el nuevo celular");
                    let mailAModificar = prompt("Por favor, ingrese el nuevo email");
            
                    telAModificar = Number(telAModificar);
            
                    confirmar = prompt(`Por favor, confirmar si los datos ingresados
                    son correctos:
                    
                    👤  NOMBRE: ${nombreAModificar}
                    📞  CELULAR: ${telAModificar}
                    📮  EMAIL: ${mailAModificar}
                    
                    SI ✔️ - NO ❌
                
                    `);
                    
                    if (confirmar === "SI") {
                        
                        if (usuarios[i][j] === IDAModificar) {
        
                            usuarios[i].splice(1, 1, nombreAModificar);
                            usuarios[i].splice(2, 1, telAModificar);
                            usuarios[i].splice(3, 1, mailAModificar);
        
                            console.log(usuarios);
        
                            alert("Los datos fueron modificados correctamente ✔️");

                            break;
                        };

                    } else {

                        alert("La operacion ha sido cancelada ❌");
                    
                        break;
                    };
                };
            };
        };

        if (IDAModificar > usuarios.length) {

            alert("El usuario solicitado no existe ❗");
            
        };
        
        continuar = prompt(`Desea repetir la operación?

        SI ✔️ - NO ❌
    
        `);

        console.log(continuar);

        if (continuar === "NO") {

            operacion = prompt(`Qué operación desea realizar?

            👤  CREAR
            🔎  BUSCAR
            📄  LISTAR
            ✏️  MODIFICAR
            🗑️  ELIMINAR
            🚪  SALIR
            
            `);

            console.log(operacion);

            if (operacion === "SALIR") {

                confirmar = prompt(`Está seguro que desea salir del programa?
        
                SI ✔️ - NO ❌
                
                `);

                if (confirmar === "SI") {
                    
                    alert("Hasta luego! 👋");

                } else {

                    operacion = prompt(`Qué operación desea realizar?

                    👤  CREAR
                    🔎  BUSCAR
                    📄  LISTAR
                    ✏️  MODIFICAR
                    🗑️  ELIMINAR
                    🚪  SALIR
                    
                    `);

                    console.log(operacion);

                }; 
            };
        };
    };


// ELIMINAR USUARIO

    if (operacion === "ELIMINAR") {

        let usuarioAEliminar = prompt("Por favor, ingrese el ID del usuario que desea eliminar:")

        usuarioAEliminar = Number(usuarioAEliminar);

        for (let i = 0; i < usuarios.length; i++) {
            
            for (let j = 0; j < usuarios[i].length; j++) {
                
                if (usuarios[i][j] === usuarioAEliminar) {

                    confirmar = prompt(`Desea eliminar el siguiente usuario?
                    
                    🆔   ID:     ${usuarios[i][j]}
                    👤  Nombre:  ${usuarios[i][j + 1]}
                    📞  Celular: ${usuarios[i][j + 2]}
                    📮  Correo:  ${usuarios[i][j + 3]}
                    
                    SI ✔️ - NO ❌
                
                `);
                    
                    if (confirmar === "SI") {
                            
                        if (usuarios[i][j] === usuarioAEliminar) {
        
                            usuarios.splice(usuarioAEliminar, 1);
                            
                            console.log(usuarios);
        
                            alert("Los datos fueron modificados correctamente ✔️");

                            break;
                        };

                    } else {

                        alert("La operacion ha sido cancelada ❌");
                    
                        break;
                    };
                };
            };
        };

        continuar = prompt(`Desea repetir la operación?

        SI ✔️ - NO ❌
    
        `);

        console.log(continuar);

        if (continuar === "NO") {

            operacion = prompt(`Qué operación desea realizar?

            👤  CREAR
            🔎  BUSCAR
            📄  LISTAR
            ✏️  MODIFICAR
            🗑️  ELIMINAR
            🚪  SALIR
            
            `);

            console.log(operacion);

            if (operacion === "SALIR") {

                confirmar = prompt(`Está seguro que desea salir del programa?
        
                SI ✔️ - NO ❌
                
                `);

                if (confirmar === "SI") {
                    
                    alert("Hasta luego! 👋");

                } else {

                    operacion = prompt(`Qué operación desea realizar?

                    👤  CREAR
                    🔎  BUSCAR
                    📄  LISTAR
                    ✏️  MODIFICAR
                    🗑️  ELIMINAR
                    🚪  SALIR
                    
                    `);

                    console.log(operacion);

                };
            };
        };
    };

};



// Integrador 2 - consignas

// 🛒 Nuestra clienta, muy conforme con el trabajo que hicimos la vez pasada, nos pidió que hagamos un nuevo programa para gestionar los usuarios de su tienda online.

// 💻 Crear un programa para gestionar usuarios

// 👥 El programa debe venir ya con una lista de usuarios precargados, con los siguientes datos

// ID 	NOMBRE 	TELEFONO 	EMAIL
// 0 	Carla 	1545628984 	carla@gmail.com
// 1 	Pedro 	1545251245 	pedro@gmail.com
// 2 	Lucas 	1523357849 	lucas@gmail.com
// 3 	Ana 	15789456 	ana@gmail.com

// ⚙️ Debe tener un menú que permita realizar las siguientes operaciones (con su respectivo flujo)

// Operaciones

// 👤 Crear un usuario

//     Debe pedir los datos del usuario a ingresar, uno por uno
//     Los datos a guardar son
//         Nombre
//         Teléfono
//         Email
//     Una vez ingresados debe mostrar los datos ingresados y preguntar si desea confirmar la operación
//         Si la respuesta es afirmativa debe agregar un nuevo usuario a la lista de usuarios con los datos ingresados y mostrar un mensaje de éxito. Al usuario agregado se le tiene que asignar un id automáticamente, este id debe ser único para cada usuario
//         Si la respuesta es negativa mostrar un mensaje indicando que la operación fue cancelada
//     A continuación debe pedir si se desea realizar nuevamente el procedimiento
//         Si la respuesta es afirmativa debe volver a realizar el procedimiento
//         Si la respuesta es negativa debe llevar al menú de operaciones

//         AL MENOS LLEGAR HASTA ACA

// 🔎 Buscar un usuario

//     Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email
//     A continuación debe pedir ingresar el valor que se va a buscar
//     Si el usuario existe debe mostrar la información del usuario con todos sus datos
//     Si el usuario no existe debe mostrar un mensaje informándolo
//     A continuación debe pedir si se desea realizar nuevamente el procedimiento
//         Si la respuesta es afirmativa debe volver a realizar el procedimiento
//         Si la respuesta es negativa debe llevar al menú de operaciones


// 📄 Listar todos los usuarios

//     Debe mostrar un listado con todos los usuarios y todos sus datos:
//         Id
//         Nombre
//         Teléfono
//         Email
//     Luego debe llevar al menú de operaciones


// ✏️ Modificar un usuario

//     Debe pedir ingresar el id del usuario a modificar
//     Si el usuario existe debe pedir ingresar uno por uno los datos a modificar del usuario:
//         Nombre
//         Teléfono
//         Email
//     Luego debe mostrar los datos ingresados y preguntar si desea confirmar la operación
//         Si la respuesta es afirmativa debe modificar los datos del usuario con los nuevos ingresados y mostrar un mensaje de éxito
//         Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
//     Si el usuario no existe debe mostrar un mensaje informándolo
//     A continuación debe pedir si se desea realizar nuevamente el procedimiento
//         Si la respuesta es afirmativa debe volver a realizar el procedimiento
//         Si la respuesta es negativa debe llevar al menú de operaciones


// 🗑️ Eliminar un usuario

//     Debe pedir ingresar el id del usuario a eliminar
//     Si el usuario existe debe mostrar los datos del usuario y preguntar si desea confirmar la operación
//         Si la respuesta es afirmativa debe eliminar el usuario de la lista de usuarios y mostrar un mensaje de éxito
//         Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
//     A continuación debe pedir si se desea realizar nuevamente el procedimiento
//         Si la respuesta es afirmativa debe volver a realizar el procedimiento
//         Si la respuesta es negativa debe llevar al menú de operaciones


// 🚪 Salir del programa

//     Debe preguntar si desea confirmar la operación
//         Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
//         Si la respuesta es negativa debe volver al menú de operaciones


// ✔️ Todos los mensajes que se requieran son libres (pueden poner lo que mejor les parezca)

// 🔓 No es requerido validar los datos que se ingresan, por ejemplo, si en vez de ingresar un número de celular se ingresa un dato no válido, como una palabra

// ❗ Sí es requerido que si se ingresa una opción incorrecta (cuando tengamos que hacerlo) el programa nos avise del hecho, y tome una acción por default (por ejemplo, volver al menú)

// 👍 Tips, consejos y buenas prácticas:

//     ⚙️ Encarar un punto a la vez, probarlo bien, y cuando esté funcionando y cumpla con lo necesario, seguir adelante
//     🐪 Utilizar buenos nombres de variables y camelCase y SNAKE_CASE
//     📦 Poner todo lo que se pueda dentro de variables para evitar repetir valores (como textos, mensajes, etc)
//     ♻️ Si encontramos código que repetimos en muchas ocasiones, tratar de reescribirlo de alguna manera para que esto no pase
//     📝 Espaciar los bloques de código en secciones y poner comentarios para que sea más legible
//     🔎 Si tenemos algún problema, usar la consola para inspeccionar los valores de las variables
//     🔀 Probar bien todos los caminos posibles

