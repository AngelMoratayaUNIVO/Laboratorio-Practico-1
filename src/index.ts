// ============================================================
// UNIVERSIDAD DE ORIENTE - Programación Orientada a Objetos
// Lab Práctico POO
// Estudiante: Angel Morataya - Carnet: U20261887
// ============================================================

// ============================================================
// EJERCICIO 1: Clase EstudianteUnivo con 5 atributos (carnetU privado)
// ============================================================

class EstudianteUnivo {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    private carnetU: string;

constructor(nombre: string,apellido: string,telefono: string,correo: string,carnetU: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
    this.carnetU = carnetU;}
}

console.log("========== EJERCICIO 1 ==========");
const estudiante1887 = new EstudianteUnivo(
  "Angel",
  "Morataya",
  "7209-3376",
  "angel.morataya@univo.edu.sv",
  "U20261887"
);

console.log("Nombre:", estudiante1887.nombre);
console.log("Apellido:", estudiante1887.apellido);
console.log("Teléfono:", estudiante1887.telefono);
console.log("Correo:", estudiante1887.correo);
//Ya que carnet es privado, no se puede mostrar en consola asi que solo imprimo esto de referencia.
console.log("Carnet: (atributo privado - acceso restringido)");

//!PERO, encontre una forma de "imprimir en pantalla" una variable private sin usar un metodo, puede descomentar la linea de abajo para probar. 
//console.log((estudiante1887 as any).carnetU);

// ============================================================
// EJERCICIO 2: Clase Producto con cálculo de precio
// ============================================================

class Producto {
  nombre: string;
  cantidad: number;
  precio: number;
  iva: number = 13;

  constructor(nombre: string, cantidad: number, precio: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  calcularPrecio(descuentoPorcentaje: number): void {
    const precioTotal = this.precio * this.cantidad;
    const descuento = precioTotal * (descuentoPorcentaje / 100);
    const subtotal = precioTotal - descuento;
    const iva = subtotal * (this.iva / 100);
    const total = subtotal + iva;

    console.log(`Cantidad de producto: ${this.cantidad}\nPrecio: $${precioTotal.toFixed(2)}\nDescuento: $${descuento.toFixed(2)}\nIva: $${iva.toFixed(2)}\nTotal a pagar: $${total.toFixed(2)}`);
  }
}

console.log("\n========== EJERCICIO 2 ==========");
const producto1 = new Producto("Laptop", 2, 500.00);
producto1.calcularPrecio(10);

// ============================================================
// EJERCICIO 3: Clase PersonaEdad - verificar edad y estado
// ============================================================

class PersonaEdad {
  nombre: string;
  fechaNacimiento: Date;

  constructor(nombre: string, fechaNacimiento: string) {
    this.nombre = nombre;
    this.fechaNacimiento = new Date(fechaNacimiento);
  }

  calcularEdad(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear(); //Con esto logre obtener los años.
    const mes = hoy.getMonth() - this.fechaNacimiento.getMonth(); //Con esto logre obtener los meses.
    if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) { 
      edad--;
    } //Con esto logre obtener los dias, y si el mes es menor a 0 o si el mes es igual a 0 pero el dia de hoy es menor al dia de nacimiento, entonces se resta 1 año a la edad.
    return edad;
  }

  obtenerEstado(): string {
    const edad = this.calcularEdad();
    if (edad >= 0 && edad <= 2) return "Bebé";
    else if (edad > 2 && edad <= 10) return "Niño/Niña";
    else if (edad > 10 && edad <= 14) return "Pre adolescente";
    else if (edad > 14 && edad <= 17) return "Adolescente";
    else if (edad >= 18 && edad <= 30) return "Joven";
    else if (edad > 30 && edad <= 50) return "Adulto";
    else return "Adulto Mayor";
  }

  mostrarInfo(): void {
    const edad = this.calcularEdad();
    const estado = this.obtenerEstado();
    console.log(`Nombre: ${this.nombre}\nFecha de Nacimiento: ${this.fechaNacimiento.toLocaleDateString("es-NI")}\nEdad: ${edad} años\nEstado: ${estado}`);
  }
}

console.log("\n========== EJERCICIO 3 ==========");

const p1 = new PersonaEdad("Angel Morataya", "2004-02-03");
p1.mostrarInfo();
console.log("---");

const p2 = new PersonaEdad("David Isleño", "2008-04-06");
p2.mostrarInfo();
console.log("---");

const p3 = new PersonaEdad("Leslie Ramirez", "2005-07-20");
p3.mostrarInfo();
console.log("---");

const p4 = new PersonaEdad("Roberto Díaz", "1970-11-05");
p4.mostrarInfo();