export interface User {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    password: string;
    phone: string;
    BirthDate: Date;
    score: number; //valor inicial 5
    NumberOfEventsCreated: number; //valor inicial 0 
    NumberOfEventsParticipated: number; //valor inicial 0 
}