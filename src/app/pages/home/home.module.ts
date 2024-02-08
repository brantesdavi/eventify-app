import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { EventCardModule } from '../../components/event-card/event-card.module';

@NgModule({
  imports: [CommonModule, EventCardModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
