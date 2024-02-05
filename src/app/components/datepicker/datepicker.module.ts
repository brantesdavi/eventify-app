import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
