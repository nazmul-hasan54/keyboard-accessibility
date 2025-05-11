import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dummy-animation',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './dummy-animation.component.html',
  styleUrl: './dummy-animation.component.css',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [animate('600ms ease-out')]),
    ]),
  ],
})
export class DummyAnimationComponent {
  elementsInView: { [key: string]: boolean } = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.id;
            this.onElementInView(elementId);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elements.forEach((element: HTMLElement) => observer.observe(element));
  }

  
  onElementInView(elementId: string) {
    this.elementsInView[elementId] = true;
  }
}
