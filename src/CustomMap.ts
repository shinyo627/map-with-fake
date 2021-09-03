// Instruction to every other class
// on how they can be an argument to 'addMarker()'
export interface Mappable {
  location: { lat: number, lng: number},
  markerContent(): string,
  color: string
}

export class CustomMap {
  // This class will be restricted from calling any builtin functions of googleMap with private modifier
  // except initialization.
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      zoomControl: true,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(item: Mappable): void {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: item.location.lat,
          lng: item.location.lng
        }
      })

      marker.addListener('click', ()=> {
        const infoWindow = new google.maps.InfoWindow({
          content: item.markerContent()
        })

        infoWindow.open(this.googleMap, marker)
      })

  }
}