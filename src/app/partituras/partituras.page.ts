import { Component } from '@angular/core';

@Component({
  selector: 'app-partituras',
  templateUrl: './partituras.page.html',
  styleUrls: ['./partituras.page.scss'],
})
export class PartiturasPage {
  mensaje: string = '';
  notaActual: { nombre: string; cifradoAmericano: string; imagen: string } | null = null;

  // Para el contador
  totalNotas: number = -1; 
  notasAdivinadas: number = 0; 

  // Arreglo de notas con cifrados americano y tradicional
  notas = [
    { nombre: 'Do', cifradoAmericano: 'C', imagen: 'assets/img/partituras/C.PNG' },
    { nombre: 'Re', cifradoAmericano: 'D', imagen: 'assets/img/partituras/D.PNG' },
    { nombre: 'Mi', cifradoAmericano: 'E', imagen: 'assets/img/partituras/E.PNG' },
    { nombre: 'Fa', cifradoAmericano: 'F', imagen: 'assets/img/partituras/F.PNG' },
    { nombre: 'Sol', cifradoAmericano: 'G', imagen: 'assets/img/partituras/G.PNG' },
    { nombre: 'La', cifradoAmericano: 'A', imagen: 'assets/img/partituras/A.PNG' },
    { nombre: 'Si', cifradoAmericano: 'B', imagen: 'assets/img/partituras/B.PNG' },
  ];

  constructor() {
    this.seleccionarNotaAleatoria();
  }

  // Seleccionar una nota aleatoria
  seleccionarNotaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.notas.length);
    this.notaActual = this.notas[indiceAleatorio];
    this.totalNotas++;
  }

  // Verificar respuesta
  verificarRespuesta(respuestaUsuario: string) {
    const esCorrecta =
      respuestaUsuario.toLowerCase() === this.notaActual?.cifradoAmericano.toLowerCase();

    if (esCorrecta) {
      this.mensaje = '¡Correcto!';
      this.notasAdivinadas++;
      this.seleccionarNotaAleatoria();
    } else {
      this.mensaje = 'Intenta de nuevo.';
      this.totalNotas++;
    }
  }
}
