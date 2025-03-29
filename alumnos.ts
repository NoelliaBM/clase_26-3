export class alumno{
   private nombre: string;
   private apellido: string;
   private nota:number;
   private aprobado:boolean
   private matriculado:boolean;

   constructor (pNombre:string,pApellido:string,pNota:number,pAprobado?:boolean, pMatriculado?:boolean){
    this.nombre=pNombre;
    this.apellido=pApellido;
    this.nota=pNota;
    //pAprobado=this.nota > 7 ? true : false;
    this.aprobado=pAprobado ?? this.nota > 7 ? true : false ;
    this.matriculado=pMatriculado?? true;
   }
   public getNombre(){
    return this.nombre;
  }
  public setNombre(pNombre:string):void{
    this.nombre = pNombre;
  }
  public getApellido(){
    return this.apellido;
  }
  public setApellido(pApellido:string):void{
    this.apellido = pApellido;
  }
  public getNota(){
    return this.nota;
  }
  public setNota(pNota:number):void{
    this.nota = pNota;
  }
  public getAprobado(){
    return this.aprobado;
  }
  public setAprobado(pAprobado:boolean):void{
    this.aprobado = pAprobado;

  }

  public setMatriculado(pMatriculado:boolean):void{
    this.matriculado = pMatriculado;
  }
  public getMayticulado(){
    return this.matriculado;
  }


public infoAlumno(): void {
  console.log(`Nomvre: ${this.nombre}`);
  console.log(`Apellido: ${this.apellido}`);
  console.log(`Nota: ${this.nota}`);
  console.log(`Aprobado: ${this.nota > 7 ? "Sí" : "No"}`);
  console.log(`Matriculado: ${this.matriculado ? "Sí" : "No"}`);
};
};