import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
})
export class TimepickerComponent {
  time = '';
  date = new Date();
  hours = this.date.getHours().toString().padStart(2, '0');
  minutes = this.date.getMinutes().toString().padStart(2, '0');
  placeholder = `${this.hours}:${this.minutes}`;
  constructor() { }

  ngOnInit(): void {
  }

  // onKeyDown(event: KeyboardEvent) {
  //   const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight'];
  //   if (!allowedKeys.includes(event.key)) {
  //     event.preventDefault();
  //   }
  // }
  
}
