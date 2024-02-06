import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
})
export class NewEventComponent {
  @ViewChild('eventTitle')
  editableText!: ElementRef;

  selectedCategory: number = 0;

  eventDesc: string = 'Vamos comemorar o aniversario dela bem feliz e animado, esperamos a participação de todos';

  getCategoryColor() {
    const colors: { [key: number]: string } = {
      0: '#393939',
      1: '#4DB8BF',
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
    switch(this.randomNumer()){
      case 0:
        this.editableText.nativeElement.value = "Celebração Sob as Estrelas";
        break;
      case 1:
        this.editableText.nativeElement.value = "Inovação em Foco: Conferência Anual";
        break;
      case 2:
        this.editableText.nativeElement.value = "Encontro Vibrante: Conectando Pessoas, Criando Memórias";
        break;
      case 3:
        this.editableText.nativeElement.value = "Rumo ao Futuro: Explorando Novas Possibilidades";
        break;
      case 4:
        this.editableText.nativeElement.value = "Expressões Culturais: Celebrando a Diversidade";
        break;
      case 5:
        this.editableText.nativeElement.value = "Energia Positiva: Um Dia para Inspirar e Ser Inspirado";
        break;
      default:
        this.editableText.nativeElement.value = "Festa anual";
        break;
    }

  }

  randomNumer(): Number{
    const randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
  }

  submitForm() {
    console.log("submit")
  }
  
  
}
