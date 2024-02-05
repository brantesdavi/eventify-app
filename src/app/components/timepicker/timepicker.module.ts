import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TimepickerComponent } from './timepicker.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
@NgModule({
  imports: [CommonModule, FormsModule, NgxMaskPipe, NgxMaskDirective],
  declarations: [TimepickerComponent],
  exports: [TimepickerComponent],
  providers:[provideNgxMask(),]
})
export class TimepickerModule {}
