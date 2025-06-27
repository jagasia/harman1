import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
@Input() highlight:string='yellow';

  constructor(private el:ElementRef, private renderer:Renderer2) { }

 
  // @HostListener('mouseenter') onEnter() {
  //   this.el.nativeElement.style.backgroundColor = this.highlight;
  // }

  // @HostListener('mouseleave') onLeave() {
  //   this.el.nativeElement.style.backgroundColor = '';
  // }

   @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlight);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    this.renderer.removeStyle(this.el.nativeElement, 'fontWeight');
  }


}
