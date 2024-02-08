import { Component } from '@angular/core';
import { Event } from "../../models/event.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  eventData: Event[] = [
    {
      title: "Aniversario da Rebeca",
      description: "Descrição do Evento 1",
      dateTime: "2024-02-08T12:00:00",
      local: "Local do Evento 1",
      category: 5,
      UserList: [
        {
          id: 101,
          name: "Usuário 1",
          email: "usuario1@example.com",
          cpf: "123.456.789-01",
          password: "senha123",
          phone: "123-456-7890",
          BirthDate: new Date("1990-01-01"),
          score: 5,
          NumberOfEventsCreated: 0,
          NumberOfEventsParticipated: 0
        },
        // Adicione mais usuários se necessário
      ]
      },
      {
        title: "Aniversario da Rebeca",
        description: "Descrição do Evento 1",
        dateTime: "2024-02-08T12:00:00",
        local: "Local do Evento 1",
        category: 3,
        UserList: [
          {
            id: 101,
            name: "Usuário 1",
            email: "usuario1@example.com",
            cpf: "123.456.789-01",
            password: "senha123",
            phone: "123-456-7890",
            BirthDate: new Date("1990-01-01"),
            score: 5,
            NumberOfEventsCreated: 0,
            NumberOfEventsParticipated: 0
          },
          // Adicione mais usuários se necessário
        ]
        },
        {
        title: "Aniversario da Rebeca",
        description: "Descrição do Evento 1",
        dateTime: "2024-02-08T12:00:00",
        local: "Local do Evento 1",
        category: 1,
        UserList: [
          {
            id: 101,
            name: "Usuário 1",
            email: "usuario1@example.com",
            cpf: "123.456.789-01",
            password: "senha123",
            phone: "123-456-7890",
            BirthDate: new Date("1990-01-01"),
            score: 5,
            NumberOfEventsCreated: 0,
            NumberOfEventsParticipated: 0
          },
          // Adicione mais usuários se necessário
        ]
        },
  ];
}
