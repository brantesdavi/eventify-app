import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
})
export class TimepickerComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  private readonly mask = 'HH:mm';

  constructor() {}

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    // Permite apenas números e ':'
    if (!/[0-9:]/.test(value)) {
      input.value = value.slice(0, -1);
      return;
    }
    // Valida o formato da máscara
    if (value.length > this.mask.length) {
      input.value = value.slice(0, this.mask.length);
      return;
    }
    // Limita o número de caracteres
    input.value = value.substring(0, 4);
    // Emite o novo valor
    this.valueChange.emit(input.value);
  }
}
