import { Component, ElementRef, Input, SimpleChanges, ViewChild, EventEmitter, Output } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';

@Component({
  selector: 'app-vn-map',
  templateUrl: './vn-map.component.html',
  styleUrls: ['./vn-map.component.css']
})
export class VnMapComponent {
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
          zoom: 4.0,
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


    }

  }

  @Output() notify = new EventEmitter();
}
