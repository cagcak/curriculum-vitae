import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: ` <p>error works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
