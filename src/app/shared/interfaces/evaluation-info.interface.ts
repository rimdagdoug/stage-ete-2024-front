import { Evaluation } from "./evaluation.interface";
import { Skills } from "./skills.interface";
import { User } from "./user.interface";

export interface EvaluationInfo{
    id:number,
    evaluation: {
        developer : User
    }
    skills: Skills
}