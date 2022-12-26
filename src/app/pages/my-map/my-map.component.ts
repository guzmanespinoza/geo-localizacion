import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { icon, Map, marker, tileLayer, circle } from 'leaflet';

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

  geo: any;
  map: any;
  calucoGeoLocal: [number, number] = [13.7248298, -89.6618164];

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {

    this.map = new Map('map').setView(this.calucoGeoLocal, 17.11);

    tileLayer(
      'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
      { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }
    ).addTo(this.map);




    marker(
      [13.726234625064649, -89.66104084765344],
      {
        icon: icon({
          iconUrl: 'https://i.postimg.cc/6q45PhDc/anthony.jpg',
          iconSize: [40, 40],
        })
      }
    ).addTo(this.map).bindPopup('Pizza Anthony <br> <a href="">Ordenar</a>');

    marker(
      [13.724135577700165, -89.66166031393588],
      {
        icon: icon({
          iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipOSCW7dUx08JBL5SKIdyqB6yVF3NAgd3GmwDXYj=w408-h544-k-no',
          iconSize: [40, 40],
        })
      }
    ).addTo(this.map);

    marker(
      [13.725116862406084, -89.66150141430309],
      {
        icon: icon({
          iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipPqeg5hOPhuUrHL5kqN_3k8mxsIr8hyuQvyF5-Y=w408-h399-k-no',
          iconSize: [40, 40],
        })
      }
    ).addTo(this.map);


    marker(
      [13.72539686815202, -89.66276666088018],
      {
        icon: icon({
          iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipO7c0pP-HnMqy23bYeyKqDIob_jPWSrHrxYmdxn=w408-h544-k-no',
          iconSize: [40, 40],
        })
      }
    ).addTo(this.map);

    marker(
      [13.726687025623345, -89.6624162531474],
      {
        icon: icon({
          iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipNMmcMfT7aD4Sohsjx4RtR5Nl1lcO85HevqhWvH=w408-h527-k-no',
          iconSize: [40, 40],
        })
      }
    ).addTo(this.map);

    marker(
      [13.72531957148504, -89.66119865381295],
      {
        icon: icon({
          iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipPzX4-Pv1jMu1G3xCFM-4fcS8iH2rdTLsPjlRR4=w408-h544-k-no',
          iconSize: [40, 40],
        })
      }
    ).addTo(this.map);

 
    circle([13.725259894936478, -89.66149177779121], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map).bindPopup('Costo por envio $0.65');



    setTimeout(() => {
      this.getGeolocalization();
    }, 5000);
  


  }

  /**
   * Metodo para obtener latidud y logitud
   */
  public getGeolocalization() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.useLocation = [coords.latitude, coords.longitude];
        console.log('useLocation', this.useLocation);
        marker(this.useLocation).addTo(this.map);

      }
    );
  }

}
