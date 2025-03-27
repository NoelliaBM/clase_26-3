export class alumno{
   private nombre: string;
   private apellido: string;
   private nota:number;
   private aprobado:boolean;

   constructor (pNombre:string,pApellido:string,pNota:number,pAprobado:boolean){
    this.nombre=pNombre;
    this.apellido=pApellido;
    this.nota=pNota;
    this.aprobado=pAprobado;
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

    if(this.nota > 7){
        this.aprobado = true
    }else{
        this.aprobado = false
    }
  }

}