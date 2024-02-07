import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
  
  MONTH_NAMES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
    ];
    
    DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  showDatepicker = false;
  datepickerValue!: string;
  @Output() datepickerValueChange: EventEmitter<string> = new EventEmitter<string>();
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];

  constructor() {}

  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }



  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    let todaydate = new Date(this.year, this.month, today.getDate())
    this.datepickerValue = this.formatDate(todaydate);
    this.datepickerValueChange.emit(this.datepickerValue)
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = this.formatDate(selectedDate);
    this.showDatepicker = false;
    this.datepickerValueChange.emit(this.datepickerValue)
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }
  private formatDate(date: Date): string {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  

  trackByIdentity = (index: number, item: any) => item;
}
