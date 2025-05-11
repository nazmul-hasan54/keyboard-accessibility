import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  accordionItems = [
    { title: 'What is your return policy?', content: 'Our return policy is 30 days...', expanded: false },
    { title: 'How do I track my order?', content: 'You can track your order by...', expanded: false },
    { title: 'Can I purchase items again?', content: 'Yes, you can purchase items again by...', expanded: false },
  ];

  toggleAccordion(index: number) {
    this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
  }
}
