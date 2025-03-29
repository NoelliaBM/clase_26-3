import { alumno } from "./alumnos";
import { profesor } from "./profesor";
import { escuela } from "./escuela";

let alumno1 = new alumno("Juan", "Gutierrez", 8, undefined, undefined);
let alumno2 = new alumno("Pedro", "Ruiz", 5, undefined, undefined);
let alumno3 = new alumno("Luis", "Perez", 9, undefined, undefined);


let listaAlunos = new Array(alumno1, alumno2, alumno3);


let alumno4 = new alumno("Raul", "Gonzalez", 4, undefined, undefined);
listaAlunos.push(alumno4);



let profe1 = new profesor("Oscar", "Pereyra", listaAlunos, true);
let profe2 = new profesor("Javier", "Rinaldi", listaAlunos, true);
let listaProfe = new Array(profe1, profe2);


console.log(listaAlunos);




