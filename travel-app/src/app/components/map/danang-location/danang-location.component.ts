import { Component, ElementRef, Input, SimpleChanges, ViewChild, EventEmitter, Output } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';

@Component({
  selector: 'app-danang-location',
  templateUrl: './danang-location.component.html',
  styleUrls: ['./danang-location.component.css']
})
export class DanangLocationComponent {
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
          zoom: 4.753214837,
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
        const icon = new H.map.Icon('/assets/map/marker.png',
          // Adjust the marker size to your needs:
          {size: { w: 40, h: 40 }
            });
        const marker = new H.map.Marker({ lat: landmark.lat, lng: landmark.lng },
          { data: landmark.name, icon: icon });
          map.addObject(marker);
      });

    }

  }

  @Output() notify = new EventEmitter();
}
