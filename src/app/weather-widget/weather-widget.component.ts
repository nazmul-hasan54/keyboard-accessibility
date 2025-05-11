import { Component, inject } from '@angular/core';
import { WidgetActions } from '../services/widget-actions.service';
import { WidgetState } from '../services/widget-state.service';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [],
  providers: [
    WidgetActions,
    WidgetState
  ],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.css'
})
export class WeatherWidgetComponent {
  state = inject(WidgetState);
  actions = inject(WidgetActions);
}
