import { Injectable } from "@angular/core";

export interface WeatherData {
    temperature: number,
    windspeed: number,
    skyCondition: string
}

@Injectable()

export class WidgetState {
    data: WeatherData = {
        temperature: 20,
        windspeed: 5,
        skyCondition: 'sunny'
    }

    lastUpdateAt = new Date();
}