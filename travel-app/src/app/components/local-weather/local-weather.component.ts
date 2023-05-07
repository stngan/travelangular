import { Component } from '@angular/core';

import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css'],
})
export class LocalWeatherComponent {
  myWeather: any
  temperature: number = 0
  humidity: number = 0
  summary: string =''
  maxtemp: string =''
  iconURL: string =''
  city: string ='Ho Chi Minh'
  units: string ='metric'



  constructor(private weatherservice: WeatherService, ) {

  }
  ngOnInit(): void {
    this.weatherservice.getWeather(this.city, this.units).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather)
        this.temperature= this.myWeather.main.humidity
        this.humidity= this.myWeather.main.temp
        this.summary = this.myWeather.weather[0].main
        this.maxtemp = this.myWeather.main.temp_min

        this.iconURL = 'https://openweathermap.org/img/wn/'
        + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),


    });
  }


}
