import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvalService } from 'src/app/services/eval.service';
import { notes} from 'src/app/shared/interfaces/notes.interface';


@Component({
  selector: 'app-detail-eval',
  templateUrl: './detail-eval.component.html',
  styleUrls: ['./detail-eval.component.css']
})
export class DetailEvalComponent implements OnInit{
  evaluationId!: number;
  skills: notes[] = [];
  finalScore: number | null = null;

  constructor(private route: ActivatedRoute, private evalService: EvalService) { }

  ngOnInit(): void {
    this.evaluationId = +this.route.snapshot.paramMap.get('id')!;
    this.getSkillsWithNotes(this.evaluationId);
    this.getFinalScore(this.evaluationId);
  }

  getSkillsWithNotes(id: number): void {
    this.evalService.getResultatEvaluationByIdEval(id).subscribe(
      data => {
        this.skills = data;
      },
      error => {
        console.error('Error fetching evaluation details', error);
      }
    );
  }

  getFinalScore(id: number): void {
    this.evalService.getFinalScore(id).subscribe(
      score => {
        this.finalScore = score;
      },
      error => {
        console.error('Error fetching final score', error);
      }
    )
  }
}
