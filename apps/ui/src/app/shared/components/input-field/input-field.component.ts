import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractNgModelComponent } from '../../abstracts';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styles: [
    `
      .input-with-hints {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => InputFieldComponent),
    //   multi: true,
    // },
  ],
})
export class InputFieldComponent extends AbstractNgModelComponent {
  @Input()
  label = 'Message';

  @Input()
  inputName = 'input-field';

  @Input()
  maxlength = 256;

  @Input()
  placeholder = 'Ex. I need help with...';

  @Input()
  hint: string;
}
