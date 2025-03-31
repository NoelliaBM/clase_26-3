import { Alumno } from "./Alumnos";
import { Profesor } from "./Profesor";
import { Escuela } from "./escuela";



let alumno1 = new Alumno("Juan", "Gutierrez", 8, undefined,);
let alumno2 = new Alumno("Pedro", "Ruiz", 5, undefined,);
let alumno3 = new Alumno("Luis", "Perez", 9, undefined,);


let listadoAlumnos = new Array(alumno1, alumno2);
//alumno expulsado
alumno1.setMatriculado(false);
alumno1.estaAprobado();

let profe1 = new Profesor("Oscar", "Pereyra", "matematica", listadoAlumnos, true);
let profe2 = new Profesor("Javier", "Rinaldi", "ingles", listadoAlumnos, true);
let listaProfe = new Array(profe1, profe2);

let escuela1 = new Escuela("Media", "Luna", listadoAlumnos, listaProfe);

/*function matricularIndex(alumnoNombre): void {
    alumnoNombre = new alumno("Raul", "Gonzalez", 4, undefined, undefined);
    listadoAlumnos.push(alumnoNombre);
    escuela1.matricularAlumno()
    return alumnoNombre;
};
let alumno4: undefined;*/




//ver escuela completa
///console.log(escuela1);
//listado de profesores
//console.log(listaProfe);
//Matricular alumno
//console.log(matricularIndex(alumno5))
//expulsar alumno
//alumno1.setMatriculado(false);
//listado de alumnos
//console.log(listadoAlumnos);
//listado alumnos profesor1
//console.log(profe1.getListadoAlumnos())
//desvincular profe
//console.log(profe1.setContratado(false))
escuela1.matricularAlumno(alumno3);
console.log(listadoAlumnos)