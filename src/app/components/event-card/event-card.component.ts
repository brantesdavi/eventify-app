import { Component, Input } from '@angular/core';
import { Event } from "../../models/event.model";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input()
  event!: Event;

  color: string = '';
  bgColor: string = '';
  icon: string = '';
  colorCircle: string = '';

  icons = [        
    {
      //festa
      "color": "#7BE2E8",
      "colorCircle": "#51B1B7",
      "bgColor": "#63CCD2",
      "icon": "fa-solid fa-champagne-glasses",
    },
    {
      //conferencia
      "color": "#B3A2FC",
      "colorCircle": "#7763CB",
      "bgColor": "#8C73F3",
      "icon": "fa-solid fa-briefcase",
    },
    {
      //social
      "color": "#FDFF99",
      "colorCircle": "#DEE05C",
      "bgColor": "#F1F373",
      "icon": "fa-solid fa-futbol",
    },
    {
      //esportivo
      "color": "#A0F2A6",
      "colorCircle": "#5EDD67",
      "bgColor": "#7FFA88", 
      "icon": "fa-solid fa-futbol",
    },
    {
      //cultural
      "color": "#FE9AE2",
      "colorCircle": "#E96DC6",
      "bgColor": "#FA7FD8",
      "icon": "fa-solid fa-masks-theater",
    },
    {
      //outros
      "color": "#F38967",
      "colorCircle": "#D26442",
      "bgColor": "#EF7A56",
      "icon": "fa-solid fa-lightbulb",
    } 
  ]; 


  ngOnInit(): void {
    this.color = this.icons[this.event.category].color;
    this.bgColor = this.icons[this.event.category].bgColor;
    this.icon = this.icons[this.event.category].icon;
    this.colorCircle = this.icons[this.event.category].colorCircle;
    
  }
}
