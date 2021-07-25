import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractNgModelComponent } from '../../abstracts';

@Component({
  selector: 'ui-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInputComponent),
      multi: true,
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => BasicInputComponent),
    //   multi: true,
    // },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputComponent extends AbstractNgModelComponent {
  @Input()
  label = 'Message';

  @Input()
  inputName = 'input-field';

  @Input()
  inputType: 'text' | 'email' | 'password' | 'number' = 'text';

  @Input()
  placeholder = 'Ex. I need help with...';

  @Input()
  formControlErrors: { [key: string]: string };

  formControlErrorMessage = '';

  // validate() {}
}
