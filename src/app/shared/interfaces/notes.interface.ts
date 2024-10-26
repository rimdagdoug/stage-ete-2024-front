import { Evaluation } from "./evaluation.interface";

  interface skills {
    name: string;
  };

  export interface notes {
    skills : skills;
    evaluation: Evaluation;
    noteDeveloper: number;
    noteManager: number;
    finalNote: number;
  }
  