import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
})
export class NewEventComponent {
  @ViewChild('editableText')
  editableText!: ElementRef;

  selectedCategory: number = 0;

  getCategoryColor() {
    const colors: { [key: number]: string } = {
      0: '#393939',
      1: '#3B46EE',
      2: '#8C73F3',
      3: '#F1F373',
      4: '#7FFA88',
      5: '#FA7FD8',
      6: '#EF7A56',
    };
  
    return colors[this.selectedCategory] || '#393939'; // Default color
  }

  isDarkOption(category: number) {
    return category >= 3; // 3, 4, 5 and 6 are considered dark options
  }

  generateTitle(){
    this.editableText.nativeElement.textContent = "Novo texto";
    switch(this.randomNumer()){
      case 0:
        this.editableText.nativeElement.textContent = "Novo texto";
        break;
      case 1:
        this.editableText.nativeElement.textContent = "festa";
        break;
      default:
        this.editableText.nativeElement.textContent = "sei la";
        break;
    }

  }

  randomNumer(): Number{
    const randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
  }

  enableEditing() {
    if (this.editableText) {
      this.editableText.nativeElement.focus();
    }
  }
  
  
}
