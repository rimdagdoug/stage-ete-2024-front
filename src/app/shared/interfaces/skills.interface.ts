import { Role } from "./role.enum";

export interface Skills {
    id: number; 
    name: string;
    description: string;
    skillType: Role;
    createdAt: Date;
    updatedAt: Date;
    coefficient: number;
}