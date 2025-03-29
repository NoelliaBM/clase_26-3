"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profesor = void 0;
var profesor = /** @class */ (function () {
    function profesor(pNombre, pApellido, pListadoAlumnos, pContratado) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAlumnos;
        this.contratado = pContratado;
    }
    profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    profesor.prototype.getListadoAlumnos = function () {
        return this.listadoAlumnos;
    };
    profesor.prototype.getContratado = function () {
        return this.contratado;
    };
    profesor.prototype.setContratado = function (pContratado) {
        this.contratado = pContratado;
    };
    profesor.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    profesor.prototype.setListadoAlumnos = function (pListadoAlumnos) {
        this.listadoAlumnos = pListadoAlumnos;
    };
    return profesor;
}());
exports.profesor = profesor;
