import { User } from "./user.model";

export interface Event {
    id?: number;
    title: string;
    description: string;
    dateTime: string;
    local: string;
    category: number;
    UserList?: User[];
}