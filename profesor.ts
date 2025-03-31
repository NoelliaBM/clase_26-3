import { Alumno } from "./Alumnos";

export class Profesor {
  private nombre: string;
  private apellido: string;
  private materia: string;
  private listadoAlumnos: Alumno[];
  private contratado: boolean;

  constructor(pNombre: string, pApellido: string, pMateria: string, pListadoAlumnos: Alumno[], pContratado: boolean) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.materia = pMateria;
    this.listadoAlumnos = pListadoAlumnos;

    this.contratado = pContratado

  }
  public getNombre() {
    return this.nombre;
  }
  public setNombre(pNombre: string) {
    this.nombre = pNombre;
  }
  public getApellido() {
    return this.apellido;
  }
  public setApellido(pApellido: string): void {
    this.apellido = pApellido;
  }
  public getMateria() {
    return this.materia;
  }
  public setMateria(pMateria: string) {
    this.materia = pMateria;
  }
  public getListadoAlumnos() {

    return this.listadoAlumnos;
  }
  public setListadoAlumnos(pListadoAlumnos: Alumno[]): void {
    this.listadoAlumnos = pListadoAlumnos;
  }
  public getContratado() {
    return this.contratado;
  }
  setContratado(pContratado: boolean): void {
    this.contratado = pContratado;
  }
}