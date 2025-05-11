import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconImageComponent } from '../icon-image/icon-image.component';

@Component({
  selector: 'app-child-items',
  standalone: true,
  imports: [
    CommonModule,
    IconImageComponent
  ],
  templateUrl: './child-items.component.html',
  styleUrl: './child-items.component.css'
})
export class ChildItemsComponent {
  @Input() isVisible: boolean = false;
}
