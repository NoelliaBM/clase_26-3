import { Alumno } from "./Alumnos";
import { Profesor } from "./Profesor";

export class Escuela {
   private nombre: string;
   private director: string;
   private Alumnos: Alumno[];
   private Profesores: Profesor[];

   constructor(pNombre: string, pDirector: string, pAlumnos: Alumno[], pProfesores: Profesor[]) {
      this.nombre = pNombre;
      this.director = pDirector;
      this.Alumnos = pAlumnos;
      this.Profesores = pProfesores;
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
      return this.Alumnos;
   }
   public setAlumnos(pAlumnos: Alumno[]) {
      this.Alumnos = pAlumnos;
   }
   public getProfesores() {
      return this.Profesores;
   }
   public setProfesores(pProfesores: Profesor[]) {
      this.Profesores = pProfesores;
   }
   public matricularAlumno(pAlumno:Alumno) {
      this.Alumnos.push(pAlumno)
      console.log("Matriculaste un Alumno.")
   };
   public cotratarProfesor() {
      console.log("Usted esta contratado.")
   };
   public expulsarAlumno(pListadoAlumnos:Alumno[]) {
      let expulsa = (pListadoAlumnos).filter((Alumno) => Alumno.getMatriculado())
   console.log(expulsa);
      console.log("El Alumno ha sido expulsado. ")
   };
   public despedirProfesor() {
      console.log("Se ha despedido al Profesor")
   };
}
