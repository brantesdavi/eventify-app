import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
})
export class NewEventComponent {
  @ViewChild('editableText') editableText: ElementRef | undefined;

  enableEditing() {
    if (this.editableText) {
      this.editableText.nativeElement.focus();
    }
  }
  
}
