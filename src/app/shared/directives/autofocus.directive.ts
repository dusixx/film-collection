import { afterEveryRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective {
  private el = inject(ElementRef<HTMLInputElement>);

  constructor() {
    afterEveryRender(() => {
      setTimeout(() => this.el.nativeElement.focus());
    });
  }
}
