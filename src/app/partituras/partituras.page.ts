import { Component } from '@angular/core';

@Component({
  selector: 'app-partituras',
  templateUrl: './partituras.page.html',
  styleUrls: ['./partituras.page.scss'],
})
export class PartiturasPage {
  mensaje: string = '';
  notaActual: { nombre: string; variantes: string[]; imagen: string } | null = null;

  totalNotas: number = 0;
  notasAdivinadas: number = 0;

  notas = [
    { nombre: 'Do', variantes: ['C'], imagen: 'assets/img/partituras/C.PNG' },
    { nombre: 'Re', variantes: ['D'], imagen: 'assets/img/partituras/D.PNG' },
    { nombre: 'Mi', variantes: ['E'], imagen: 'assets/img/partituras/E.PNG' },
    { nombre: 'Fa', variantes: ['F'], imagen: 'assets/img/partituras/F.PNG' },
    { nombre: 'Sol', variantes: ['G'], imagen: 'assets/img/partituras/G.PNG' },
    { nombre: 'La', variantes: ['A'], imagen: 'assets/img/partituras/A.PNG' },
    { nombre: 'La agudo', variantes: ['A'], imagen: 'assets/img/partituras/A2.PNG' },
    { nombre: 'Si', variantes: ['B'], imagen: 'assets/img/partituras/B.PNG' },
  ];

  notasSostenidas = ['C#', 'D#', 'F#', 'G#', 'A#'];

  constructor() {
    this.seleccionarNotaAleatoria();
  }

  seleccionarNotaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.notas.length);
    this.notaActual = this.notas[indiceAleatorio];
    this.totalNotas++;
  }

  verificarRespuesta(respuestaUsuario: string) {
    const esCorrecta = this.notaActual?.variantes.includes(respuestaUsuario);

    if (esCorrecta) {
      this.mensaje = '¡Correcto!';
      this.notasAdivinadas++;
      this.seleccionarNotaAleatoria();
    } else {
      this.mensaje = 'Intenta de nuevo.';
    }
  }

  getCifradosUnicos(): string[] {
    // Crear una lista de todos los cifrados (tomando la primera variante como representativa)
    const cifrados = this.notas.map((nota) => nota.variantes[0]);
    
    // Eliminar duplicados usando Set
    return [...new Set(cifrados)];
  }
}
