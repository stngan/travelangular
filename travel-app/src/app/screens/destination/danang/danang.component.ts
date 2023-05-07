import { WeatherService } from 'src/app/services/weather.service';
import { Component, ElementRef, Input, SimpleChanges, ViewChild, EventEmitter, Output} from '@angular/core';
import { DestinationsService } from 'src/app/services/destinations.service';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';

@Component({
  selector: 'app-danang',
  templateUrl: './danang.component.html',
  styleUrls: ['./danang.component.css']
})
export class DanangComponent {
  public information:any
  public regionInfo: any
  public errMessage:string=''

  public infoID='6450de99aabc04d20d85d0f7'
  currentDate = new Date()


  myWeather: any
  temperature: number = 0
  humidity: number = 0
  summary: string =''
  maxtemp: string =''
  iconURL: string =''
  city: string ='Da Nang'
  units: string ='metric'

  constructor(public inforservice: DestinationsService, private weatherservice: WeatherService){
    // this.inforservice.getGeneralInformation().subscribe({
    //   next:(data)=>{this.information=data},
    //   error:(err)=>{this.errMessage=err}
    // })

    this.inforservice.getGeneralInformationID(this.infoID).subscribe({
      next:(data)=>{this.information=data},
      error:(err)=>{this.errMessage=err}
    })




  }

  //weatherforecast
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

  //location map
  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: '{p2xHaxVQePneXoCTZxp_EIRfpKeFLD9JbHynZW0K2yg}'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement, (layers as any).vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 10.762622, lng: 106.660172},
          zoom: 4.153214837936128,
        },
      );
      onResize(this.mapDiv.nativeElement, () => {
        map.getViewPort().resize();
      })
      this.map = map;

      map.addEventListener('mapviewchange', (ev: H.map.ChangeEvent) => {
        this.notify.emit(ev)
      });
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      const landmarks = [
        {name: 'Ho Chi Minh City', lat: 16.047079, lng: 108.206230,  label: 'DaNang', },

      ];
      landmarks.forEach(landmark => {
        // For each marker, select the icon based on the corresponding landmark label:
        const icon = new H.map.Icon('/assets/map/marker-' + landmark.label + '.png',
          // Adjust the marker size to your needs:
          {size: { w: 40, h: 40 }
            });
        const marker = new H.map.Marker({ lat: landmark.lat, lng: landmark.lng },
          { data: landmark.name, icon: icon });
          map.addObject(marker);
      });

    }

  }


  @Input() public zoom = 0;
  @Input() public lat = 0;
  @Input() public lng = 0;
  private timeoutHandle: any;
  @Output() notify = new EventEmitter();

  // ngOnChanges(changes: SimpleChanges) {
  //   clearTimeout(this.timeoutHandle);
  //   this.timeoutHandle = setTimeout(() => {
  //     if (this.map) {
  //       if (changes['zoom'] !== undefined) {
  //         this.map.setZoom(changes['zoom'].currentValue);
  //       }
  //       if (changes['lat'] !== undefined) {
  //         this.map.setCenter({lat: changes['lat'].currentValue, lng: this.lng});
  //       }
  //       if (changes['lng'] !== undefined) {
  //         this.map.setCenter({lat: this.lat, lng: changes['lng'].currentValue});
  //       }
  //     }
  //   }, 100);
  // }


}
