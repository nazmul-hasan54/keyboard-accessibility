import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-image',
  standalone: true,
  imports: [],
  templateUrl: './icon-image.component.html',
  styleUrl: './icon-image.component.css'
})
export class IconImageComponent {
  @Input() src!: string;
  @Input() iconName!: string;
}
