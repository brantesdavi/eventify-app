import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatepickerModule } from './components/datepicker/datepicker.module';
import { NewEventModule } from './pages/new-event/new-event.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './components/header/header.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    DatepickerModule, 
    NewEventModule, 
    DatepickerModule, 
    FormsModule,
    HomeModule,
    FontAwesomeModule,
    HeaderModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Eventify.Front';
}
