import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
})
export class NewEventComponent {
  @ViewChild('eventTitle')
  editableText!: ElementRef;

  selectedCategory: number = 0;
  eventForm: FormGroup  

  eventDate: string = "";
  eventTime: string = "";
  constructor(){
    this.eventForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('Vamos comemorar o aniversario dela bem feliz e animado, esperamos a participação de todos'),
      dateTime: new FormControl(new Date()),
      local: new FormControl(''),
      category: new FormControl(this.selectedCategory),
    })
  }

  onDateChange(selectedDate: string) {
    this.eventDate = selectedDate;
  }
  onTimeChange(inputTime: string){
    this.eventTime = inputTime;
  }

  onCategoryChange(){
    this.selectedCategory = this.eventForm.get('category')?.value;
  }

  createDateFromCustomFormat(dateString: string, timeString: string): Date | null {
    const dateParts = dateString.split('/');

    const horas = parseInt(timeString.substring(0, 2), 10);
    const minutos = parseInt(timeString.substring(2, 4), 10);
  
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // Os meses em JavaScript são baseados em zero (janeiro é 0, fevereiro é 1, etc.)
      const year = parseInt(dateParts[2], 10);
  
      const isValidDate = !isNaN(day) && !isNaN(month) && !isNaN(year);
  
      if (isValidDate) {
        const date =  new Date(year, month, day);
        date.setHours(horas);
        date.setMinutes(minutos);
        return date;
      }
    }
  
    return null;
  }

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
    return category >= 1; 
  }  

  submitForm() {
    const dateFormated = this.createDateFromCustomFormat(this.eventDate, this.eventTime );
    this.eventForm.patchValue({ dateTime: dateFormated });
    console.log(this.eventForm.value)
  }

  // generateTitle(){
  //   switch(this.randomNumer()){
  //     case 0:
  //       this.editableText.nativeElement.value = "Celebração Sob as Estrelas";
  //       break;
  //     case 1:
  //       this.editableText.nativeElement.value = "Inovação em Foco: Conferência Anual";
  //       break;
  //     case 2:
  //       this.editableText.nativeElement.value = "Encontro Vibrante: Conectando Pessoas, Criando Memórias";
  //       break;
  //     case 3:
  //       this.editableText.nativeElement.value = "Rumo ao Futuro: Explorando Novas Possibilidades";
  //       break;
  //     case 4:
  //       this.editableText.nativeElement.value = "Expressões Culturais: Celebrando a Diversidade";
  //       break;
  //     case 5:
  //       this.editableText.nativeElement.value = "Energia Positiva: Um Dia para Inspirar e Ser Inspirado";
  //       break;
  //     default:
  //       this.editableText.nativeElement.value = "Festa anual";
  //       break;
  //   }

  // }

  // randomNumer(): Number{
  //   const randomNumber = Math.floor(Math.random()*10);
  //   return randomNumber;
  // }
  
  
}
