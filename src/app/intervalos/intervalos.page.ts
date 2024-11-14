import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intervalos',
  templateUrl: 'intervalos.page.html',
  styleUrls: ['intervalos.page.scss'],
})
export class IntervalosPage implements OnInit {
  // Lista de notas musicales
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // Intervalos y sus distancias en semitonos
  intervals = [
    { name: 'Unión', semitones: 0 },
    { name: '2ª menor', semitones: 1 },
    { name: '2ª mayor', semitones: 2 },
    { name: '3ª menor', semitones: 3 },
    { name: '3ª mayor', semitones: 4 },
    { name: '4ª justa', semitones: 5 },
    { name: '5ª justa', semitones: 7 },
    { name: '6ª mayor', semitones: 9 },
    { name: '7ª mayor', semitones: 11 },
    { name: 'Octava', semitones: 12 }
  ];

  // Estado del ejercicio
  intervalQuestion: string = '';
  correctAnswer: string = '';
  userAnswer: string = '';
  feedbackMessage: string = '';
  startingNote: string = '';  // Nota inicial
  resultingNote: string = '';  // Nota resultante

  // Mensajes de feedback
  correctMessages = [
    '¡Esa es! 🎉',
    '"Mensaje de ánimo"',
    'Gud yob',
    'Sin tirarla al achunte',
  ];

  incorrectMessages = [
    'Nop, ta malo. 😔',
    'Falta práctica',
    'Pongase las pilas',
    'Póngase serio',
  ];

  constructor() {}

  ngOnInit() {
    // Generamos el intervalo aleatorio cuando la página se carga
    this.generateRandomInterval();
  }

  // Función para generar un intervalo aleatorio
  generateRandomInterval() {
    const randomNoteIndex = Math.floor(Math.random() * this.notes.length);
    const randomInterval = this.intervals[Math.floor(Math.random() * this.intervals.length)];

    this.startingNote = this.notes[randomNoteIndex];
    const startingNoteIndex = this.notes.indexOf(this.startingNote);

    // Calcular la nota resultante después de aplicar el intervalo
    const resultingNoteIndex = (startingNoteIndex + randomInterval.semitones) % this.notes.length;
    this.resultingNote = this.notes[resultingNoteIndex];

    // Crear la pregunta
    this.intervalQuestion = `¿Qué intervalo es entre ${this.startingNote} y ${this.resultingNote}?`;
    this.correctAnswer = randomInterval.name;
  }

  checkAnswer(answer: string) {
    this.userAnswer = answer;

    // Verificar si la respuesta del usuario es correcta
    if (answer === this.correctAnswer) {
      // Seleccionar un mensaje correcto aleatorio
      const randomCorrectMessage = this.correctMessages[Math.floor(Math.random() * this.correctMessages.length)];
      this.feedbackMessage = randomCorrectMessage;
    } else {
      // Seleccionar un mensaje incorrecto aleatorio
      const randomIncorrectMessage = this.incorrectMessages[Math.floor(Math.random() * this.incorrectMessages.length)];
      this.feedbackMessage = randomIncorrectMessage;
    }
  }

  // Función para reproducir las dos notas de un intervalo
  playInterval() {
    // Reproducir la primera nota (startingNote)
    const audio1 = new Audio(`assets/audio/${this.startingNote}.mp3`);
    audio1.play();

    // Esperar un poco antes de reproducir la segunda nota
    audio1.onended = () => {
      // Reproducir la segunda nota (resultingNote) después de que la primera haya terminado
      const audio2 = new Audio(`assets/audio/${this.resultingNote}.mp3`);
      audio2.play();
    };
  }
}
