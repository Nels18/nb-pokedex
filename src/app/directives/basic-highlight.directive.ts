import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = 'green';
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'background-color 0.3s ease');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = 'transparent';
  }
}
