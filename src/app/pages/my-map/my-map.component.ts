import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit {

  /**
   * Parametro para guardar latitud y longitud
   */
  public useLocation!: [number, number];

  constructor() { }

  ngOnInit(): void {
    this.getGeolocalization();
  }

  /**
   * Metodo para obtener latidud y logitud
   */
  public getGeolocalization() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.useLocation = [coords.latitude, coords.longitude];
      }
    );
  }

}
