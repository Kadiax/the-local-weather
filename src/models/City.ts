export interface City {
  id: string;
  state: string;
  city: string;
  coords: {
    lat: number;
    lng: number;
  };
}
