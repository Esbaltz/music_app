import { Component } from '@angular/core';

@Component({
  selector: 'app-partituras',
  templateUrl: './partituras.page.html',
  styleUrls: ['./partituras.page.scss'],
})
export class PartiturasPage {
  respuesta: string = '';
  mensaje: string = '';
  notaActual: { nombre: string; cifradoAmericano: string; imagen: string } | null = null;

  // Arreglo de notas con nombres y cifrado americano
  notas = [
    { nombre: 'Do', cifradoAmericano: 'C', imagen: 'assets/img/partituras/C.jpg' },
    { nombre: 'Re', cifradoAmericano: 'D', imagen: 'assets/img/partituras/D.jpg' },
    { nombre: 'Mi', cifradoAmericano: 'E', imagen: 'assets/img/partituras/E.jpeg' },
    { nombre: 'Fa', cifradoAmericano: 'F', imagen: 'assets/img/partituras/F.jpg' },
    { nombre: 'Sol', cifradoAmericano: 'G', imagen: 'assets/img/partituras/G.png' },
    { nombre: 'La', cifradoAmericano: 'A', imagen: 'assets/img/partituras/A.png' },
    { nombre: 'Si', cifradoAmericano: 'B', imagen: 'assets/img/partituras/B.webp' },
  ];

  constructor() {
    this.seleccionarNotaAleatoria(); // Asignar una nota aleatoria al iniciar
  }

  // Seleccionar una nota aleatoria
  seleccionarNotaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.notas.length);
    this.notaActual = this.notas[indiceAleatorio];
  }

  // Verificar respuesta y seleccionar una nueva nota si es correcta
  verificarRespuesta() {
    const respuestaUsuario = this.respuesta.trim().toLowerCase();
    const esCorrecta =
      respuestaUsuario === this.notaActual?.nombre.toLowerCase() ||
      respuestaUsuario === this.notaActual?.cifradoAmericano.toLowerCase();

    if (esCorrecta) {
      this.mensaje = '¡Correcto!';
      this.seleccionarNotaAleatoria();
    } else {
      this.mensaje = 'Intenta de nuevo.';
    }

    this.respuesta = ''; // Limpiar el campo de respuesta
  }
}
