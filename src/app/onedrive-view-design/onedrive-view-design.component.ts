import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildItemsComponent } from './child-items/child-items.component';

@Component({
  selector: 'app-onedrive-view-design',
  standalone: true,
  imports: [
    ChildItemsComponent
  ],
  templateUrl: './onedrive-view-design.component.html',
  styleUrl: './onedrive-view-design.component.css'
})
export class OnedriveViewDesignComponent {
  isChildVisible = false;

  constructor(private elementRef: ElementRef) {}

  toggleChildComponent(){
    this.isChildVisible = !this.isChildVisible;
  }
  
}
