"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumno = void 0;
var alumno = /** @class */ (function () {
    function alumno(pNombre, pApellido, pNota, pAprobado, pMatriculado) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nota = pNota;
        //pAprobado=this.nota > 7 ? true : false;
        this.aprobado = (pAprobado !== null && pAprobado !== void 0 ? pAprobado : this.nota > 7) ? true : false;
        this.matriculado = pMatriculado !== null && pMatriculado !== void 0 ? pMatriculado : true;
    }
    alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    alumno.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    alumno.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    alumno.prototype.getNota = function () {
        return this.nota;
    };
    alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    alumno.prototype.getAprobado = function () {
        return this.aprobado;
    };
    alumno.prototype.setAprobado = function (pAprobado) {
        this.aprobado = pAprobado;
    };
    alumno.prototype.setMatriculado = function (pMatriculado) {
        this.matriculado = pMatriculado;
    };
    alumno.prototype.getMayticulado = function () {
        return this.matriculado;
    };
    alumno.prototype.infoAlumno = function () {
        console.log("Nomvre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Nota: ".concat(this.nota));
        console.log("Aprobado: ".concat(this.nota));
        console.log("Matriculado: ".concat(this.matriculado ? "Sí" : "No"));
    };
    ;
    return alumno;
}());
exports.alumno = alumno;
;
