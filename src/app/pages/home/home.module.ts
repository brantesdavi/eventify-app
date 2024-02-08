import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { EventCardModule } from '../../components/event-card/event-card.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [CommonModule, EventCardModule, HeaderModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
