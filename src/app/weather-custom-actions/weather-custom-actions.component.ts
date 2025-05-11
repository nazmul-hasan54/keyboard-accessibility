import { Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-actions',
  standalone: true,
  imports: [],
  templateUrl: './weather-custom-actions.component.html',
  styleUrl: './weather-custom-actions.component.css'
})
export class WeatherCustomActionsComponent {
  weatherWidget = inject(WeatherWidgetComponent);

  onClick(){
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }
}
