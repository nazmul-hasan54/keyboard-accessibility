import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-practical-post-timeline',
  standalone: true,
  imports: [],
  templateUrl: './practical-post-timeline.component.html',
  styleUrl: './practical-post-timeline.component.css'
})
export class PracticalPostTimelineComponent {
  @Input() singleTimeline = false;
}
