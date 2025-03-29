import { alumno } from "./alumnos"

export class profesor {
  private nombre: string;
  private apellido: string;
  private listadoAlumnos: alumno[];
  private contratado: boolean;

  constructor(pNombre: string, pApellido: string, pListadoAlumnos: alumno[], pContratado: boolean) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.listadoAlumnos = pListadoAlumnos;

    this.contratado = pContratado

  }

  public getNombre() {
    return this.nombre;
  }

  public getApellido() {
    return this.apellido;
  }

  public getListadoAlumnos() {
    return this.listadoAlumnos;
  }
  public getContratado() {
    return this.contratado;
  }

  setContratado(pContratado: boolean): void {
    this.contratado = pContratado;
  }
  public setApellido(pApellido: string): void {
    this.apellido = pApellido;
  }
  public setListadoAlumnos(pListadoAlumnos: alumno[]) {
    this.listadoAlumnos = pListadoAlumnos;
  }

}