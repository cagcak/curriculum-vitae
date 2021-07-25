import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  GraphqlService,
  ResumeCollectionQuery,
  ResumesResponse,
} from '@ui/shared';

@Component({
  selector: 'curriculum-vitae-list-resume',
  templateUrl: './list-resume.component.html',
  styleUrls: ['./list-resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListResumeComponent implements OnInit {
  resumes$ = this.graphqlService.watch<ResumesResponse>(
    ResumeCollectionQuery.RESUMES
  );

  constructor(private graphqlService: GraphqlService) {}

  ngOnInit(): void {}
}
