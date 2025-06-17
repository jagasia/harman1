import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
@Input() highlight:string='yellow';

  constructor(private el:ElementRef) { }

 
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlight;
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
