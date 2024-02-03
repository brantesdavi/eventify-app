import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewEventComponent } from './new-event.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewEventComponent],
  exports: [NewEventComponent],
})
export class NewEventModule {}
