import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Output } from '@angular/core';

@Directive({
  selector: '[contentPaging]',
})
export class ContentPagingDirective implements AfterViewInit {
  @Output()
  calculatedPage: EventEmitter<number> = new EventEmitter();

  private height = 842;
  private currentPage = 1;
  private padding = '2rem';

  get container() {
    return this.document.querySelector('.container') as HTMLDivElement;
  }

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, private elementRef: ElementRef) {
    // console.log(this.elementRef);
  }

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement as HTMLDivElement | HTMLElement;
    const rect = el.getBoundingClientRect();

    // console.log(el, rect.top > this.height);

    if (rect.top > this.height) {
      el.remove();
    }

    if (el.offsetTop >= this.height - 100) {
      // el.style.transform = `translateY(calc(${this.padding} - ${this.height}px))`;
      // el.setAttribute('css')
      // el.style.display = 'none';

      // el.remove();
      this.calculatedPage.emit(++this.currentPage);
    }
  }
}
