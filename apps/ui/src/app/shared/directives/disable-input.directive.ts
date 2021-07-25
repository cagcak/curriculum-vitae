import { AfterViewChecked, Directive, ElementRef, HostListener } from '@angular/core';

enum El {
  DISABLED = 'disabled',
}

@Directive({
  selector: '[input,button]',
})
export class DisableInputDirective implements AfterViewChecked {
  @HostListener('load afterload') ngAfterViewChecked() {
    const el = this.elRef.nativeElement as HTMLInputElement | HTMLElement;
    const attr = el.getAttribute(El.DISABLED);
    if (attr === 'false' || attr === El.DISABLED) {
      el.removeAttribute(El.DISABLED);
    }
  }

  constructor(private elRef: ElementRef) {}
}
