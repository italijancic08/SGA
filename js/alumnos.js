/* const alumnos = [
    {
        id: 1,
        nombre: "Ana"
    },
    {
        id: 2,
        nombre: "Juan"
    },
    {
        id: 3,
        nombre: "Pedro"
    },
    {
        id: 4,
        nombre: "Maria"
    }
];
function obtenerAlumnos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(alumnos);
        }, 2000);
    });
} */

    async function obtenerAlumnos() {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const alumnos = await respuesta.json();
        return alumnos;
    }

    function mostrarAlumnos(alumnos) {
         //    console.table(alumnos);
         //    console.log(alumnos[0].id);
       for (const alumno of alumnos) {
           console.log(alumno.name);
       }
    }

    async function iniciar() {
        const alumnos = await obtenerAlumnos();
        mostrarAlumnos(alumnos);
    }

    iniciar();