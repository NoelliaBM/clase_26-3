import { alumno } from "./alumnos";
import { profesor } from "./profesor";
import { escuela } from "./escuela";



let alumno1 = new alumno("Juan", "Gutierrez", 8, undefined, undefined);
let alumno2 = new alumno("Pedro", "Ruiz", 5, undefined, undefined);
let alumno3 = new alumno("Luis", "Perez", 9, undefined, undefined);


let listadoAlumnos = new Array(alumno1, alumno2, alumno3);
let profe1 = new profesor("Oscar", "Pereyra", "matematica", listadoAlumnos, true);
let profe2 = new profesor("Javier", "Rinaldi", "ingles", listadoAlumnos, true);
let listaProfe = new Array(profe1, profe2);

let escuela1 = new escuela("Media", "Luna", listadoAlumnos, listaProfe);


function matricularIndex(alumnoNombre): void {
    alumnoNombre = new alumno("Raul", "Gonzalez", 4, undefined, undefined);
    listadoAlumnos.push(alumnoNombre);
    escuela1.matricularAlumno()
    return alumnoNombre;
};
let alumno5: undefined;


//ver escuela completa
console.log(escuela1);
//listado de profesores
console.log(listaProfe);
//Matricular alumno
console.log(matricularIndex(alumno5))
//expulsar alumno
alumno1.setMatriculado(false);
//listado de alumnos
console.log(listadoAlumnos);
//listado alumnos profesor1
console.log(profe1.getListadoAlumnos())
//desvincular profe
console.log(profe1.setContratado(false))