import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractNgModelComponent } from '../../abstracts';

@Component({
  selector: 'ui-free-text-input',
  templateUrl: './free-text-input.component.html',
  styleUrls: ['./free-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreeTextInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreeTextInputComponent extends AbstractNgModelComponent {
  @Input()
  label = 'Message';

  @Input()
  text: string;

  @Input()
  inputName = 'input-field';

  @Input()
  placeholder = 'Ex. I need help with...';

  @Input()
  cols = 20;

  @Input()
  minlength = 10;

  @Input()
  maxlength = 320;

  @Input()
  rows = 8;

  @Input()
  wrap: 'hard' | 'soft' | 'off' = 'soft';

  @Input()
  disabled = false;

  @Input()
  formControlErrors: { [key: string]: string };

  formControlErrorMessage = '';
}
