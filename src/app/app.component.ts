import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatepickerModule } from './components/datepicker/datepicker.module';
import { NewEventModule } from './pages/new-event/new-event.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DatepickerModule, NewEventModule, DatepickerModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Eventify.Front';
}
