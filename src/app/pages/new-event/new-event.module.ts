import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewEventComponent } from './new-event.component';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from '../../components/datepicker/datepicker.module';
import { TimepickerModule } from '../../components/timepicker/timepicker.module';

@NgModule({
    declarations: [
        NewEventComponent
    ],
    exports: [
        NewEventComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DatepickerModule,
        TimepickerModule
    ]
})
export class NewEventModule {}
