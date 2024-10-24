import { User } from "./user.interface";

export interface Evaluation {    
  id?: number;      
  developerId: string;
  managerId: string
  status: string;      
  finalNote: number;     
  developer: User;      
  manager: User;       
}