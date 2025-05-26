//URL de la api - EndPoint
const API_URL = 'https://retoolapi.dev/iQgl9z/EXPO';

//Funcion para llmar a la api y traer el json
async function ObtenerPersonas(){
    //Obtenemos la respuesta del servidor
    const res = await fetch(API_URL); //Obtener datos de la API

    //Convertir la respuesta del servidor a formato JSON
    const  data = await res.json(); //Esto es un JSON

    CrearTabla(datos); //Enviamos el json a la funcion "CrearTabla"
}


//Funcion que creara las finlas de la tabla en base a los regustros que vienen de la api
function CrearTabla(datos) { //"Datos" representa al json que viene de la api
    //se llama al "tbody" dentro de la tabla con id
    const tabla = document.querySelector("#tabla tbody");

    //para inyectar código HTML usamos "innerHTML"
    tabla.innerHTML = ""; //vaciamos el contenido de la tabla

    datos.forEach(persona => {
        tabla.innerHTML += `
        <tr>
            <td>${persona.id}</td>
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.correo}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
        `
    });


}

ObtenerPersonas();