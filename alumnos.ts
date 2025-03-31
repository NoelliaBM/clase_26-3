export class Alumno {
  private nombre: string;
  private apellido: string;
  private nota: number;
  private aprobado: boolean;
  private matriculado: boolean;

  constructor(pNombre: string, pApellido: string, pNota: number, pMatriculado?: boolean) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.nota = pNota;
    this.matriculado = pMatriculado ?? true;
  }
  public getNombre() {
    return this.nombre;
  }
  public setNombre(pNombre: string): void {
    this.nombre = pNombre;
  }
  public getApellido() {
    return this.apellido;
  }
  public setApellido(pApellido: string): void {
    this.apellido = pApellido;
  }
  public getNota() {
    return this.nota;
  }
  public setNota(pNota: number): void {
    this.nota = pNota;
  }
  public getAprobado() {
    return this.aprobado;
  }
  public setAprobado(pAprobado: boolean): void {
    this.aprobado = pAprobado;
  }
  public setMatriculado(pMatriculado: boolean): void {
    this.matriculado = pMatriculado;
  }
  public getMatriculado() {
    return this.matriculado;
  }
  public infoAlumno(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Nota: ${this.nota}`);
    console.log(`Aprobado: ${this.nota}`);
    console.log(`Matriculado: ${this.matriculado ? "Sí" : "No"}`);
  };
  public estaAprobado(): void{
    this.aprobado = this.nota > 7 ? true : false;
    console.log(`El alumno ${this.getNombre() } esta aprobado? : ${this.aprobado}`);
    
  }
};
