
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // Événement quand la souris entre dans l'élément
  @HostListener('mouseenter') onMouseEnter() {
    this.addHighlightClass();
  }

  // Événement quand la souris sort de l'élément
  @HostListener('mouseleave') onMouseLeave() {
    this.removeHighlightClass();
  }

  // Ajouter la classe CSS 'highlight'
  private addHighlightClass() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  // Retirer la classe CSS 'highlight'
  private removeHighlightClass() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }
}