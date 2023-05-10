import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-danang-weather-forecast',
  templateUrl: './danang-weather-forecast.component.html',
  styleUrls: ['./danang-weather-forecast.component.css']
})
export class DanangWeatherForecastComponent {
  currentDate = new Date()
  myWeather: any
  temperature: number = 0
  humidity: number = 0
  summary: string =''
  iconURL: string =''
  city: string ='Da Nang'
  units: string ='metric'

  constructor(private weatherservice: WeatherService){}

  ngOnInit(): void {
    this.weatherservice.getWeather(this.city, this.units).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather)
        this.temperature= this.myWeather.main.temp
        this.humidity= this.myWeather.main.humidity
        this.summary = this.myWeather.weather[0].main

        this.iconURL = 'https://openweathermap.org/img/wn/'
        + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),


    });
  }

}
