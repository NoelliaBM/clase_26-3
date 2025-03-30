import { alumno } from "./alumnos"

/*export class profesor{
    private listadoAlumnos:alumno[];
constructor(pListado:alumno[]){
    this.listadoAlumnos= pListado;
}
public setListadoAlumnos(pListado:alumno[]):void{
    this.listadoAlumnos = pListado;
  }
  public getListadoAlumnos(){
    return this.listadoAlumnos;
  }
}*/
export class profesor {
  private nombre: string;
  private apellido: string;
  private materia: string;
  private listadoAlumnos: alumno[];
  private contratado: boolean;

  constructor(pNombre: string, pApellido: string, pMateria: string, pListadoAlumnos: alumno[], pContratado: boolean) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.materia = pMateria;
    this.listadoAlumnos = pListadoAlumnos;

    this.contratado = pContratado

  }

  public getNombre() {
    return this.nombre;
  }
  public setNombre(pNombre:string){
    this.nombre= pNombre;
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
    this.materia =pMateria;
  }

  public getListadoAlumnos() {
    return this.listadoAlumnos;
  }
  public setListadoAlumnos(pListadoAlumnos: alumno[]): void {
    this.listadoAlumnos = pListadoAlumnos;
  }
  public getContratado() {
    return this.contratado;
  }

  setContratado(pContratado: boolean): void {
    this.contratado = pContratado;
  }



}