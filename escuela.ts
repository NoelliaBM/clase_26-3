import { alumno } from "./alumnos";
import { profesor } from "./profesor";

export class escuela {
   private nombre: string;
   private director: string;
   private alumnos: alumno[];
   private profesores: profesor[];

   constructor(pNombre: string, pDirector: string, pAlumnos: alumno[], pProfesores: profesor[]) {
      this.nombre = pNombre;
      this.director = pDirector;
      this.alumnos = pAlumnos;
      this.profesores = pProfesores;
   }
   public getNombre() {
      return this.nombre;
   }
   public setNombre(pNombre: string) {
      this.nombre = pNombre;
   }
   public getDirector() {
      return this.director;
   }
   public setDirector(pDirector: string) {
      this.director = pDirector;
   }
   public getAlumnos() {
      return this.alumnos;
   }
   public setAlumnos(pAlumnos: alumno[]) {
      this.alumnos = pAlumnos;
   }
   public getProfesores() {
      return this.profesores;
   }
   public setProfesores(pProfesores: profesor[]) {
      this.profesores = pProfesores;
   }
   public matricularAlumno() {

      console.log("Matriculaste un alumno.")
   };
   public cotratarProfesor() {
      console.log("Usted esta contratado.")
   };
   public expulsarAlumno() {
      console.log("El alumno ha sido expulsado. ")
   };
   public despedirProfesor() {
      console.log("Se ha despedido al profesor")
   };
}
