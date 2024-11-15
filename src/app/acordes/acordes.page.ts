import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordes',
  templateUrl: './acordes.page.html',
  styleUrls: ['./acordes.page.scss'],
})
export class AcordesPage implements OnInit {
  mensaje: string = '';
  acordeActual: { nombre: string; variantes: string[]; imagen: string } | null = null;

  acordes = [
    { nombre: 'Do', variantes: ['C'], imagen: 'assets/img/acordes/C_chord.PNG' },
  ];

  constructor() {
    this.seleccionarAcordeAleatorio();
   }

  ngOnInit() {
  }

  seleccionarAcordeAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * this.acordes.length);
    this.acordeActual = this.acordes[indiceAleatorio];
  }

  verificarRespuesta(respuestaUsuario: string) {
    const esCorrecta = this.acordeActual?.variantes.includes(respuestaUsuario);

    if (esCorrecta) {
      this.mensaje = '¡Correcto!';
      this.seleccionarAcordeAleatorio();
    } else {
      this.mensaje = 'Intenta de nuevo.';
    }
  }

  getCifradosUnicos(): string[] {
    // Crear una lista de todos los cifrados (tomando la primera variante como representativa)
    const cifrados = this.acordes.map((nota) => nota.variantes[0]);
    
    // Eliminar duplicados usando Set
    return [...new Set(cifrados)];
  }

}
