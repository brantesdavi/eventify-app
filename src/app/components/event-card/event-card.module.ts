import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventCardComponent } from './event-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [EventCardComponent],
  exports: [EventCardComponent],
})
export class EventCardModule {}
