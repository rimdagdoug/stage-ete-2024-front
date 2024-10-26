import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EvalService } from 'src/app/services/eval.service';
import { notes} from 'src/app/shared/interfaces/notes.interface';
import { detailEval, finalScore } from 'src/app/state/eval/eval.action';
import { selectFinalNote, selectNotesEvals } from 'src/app/state/eval/eval.selector';


@Component({
  selector: 'app-detail-eval',
  templateUrl: './detail-eval.component.html',
  styleUrls: ['./detail-eval.component.css']
})
export class DetailEvalComponent implements OnInit{
  evaluationId!: number;
  finalScore: number | null = null;
  notesEvals$ : Observable<notes[] | null> = this.store.select(selectNotesEvals);
  finaleNote$ : Observable<number | undefined> = this.store.select(selectFinalNote);
  

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.evaluationId = +this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(detailEval({id : this.evaluationId}));
    this.store.dispatch(finalScore({id : this.evaluationId}))
  }

}
