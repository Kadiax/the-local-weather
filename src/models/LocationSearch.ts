export interface LocationSearch {
  id: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    full_address: string;
  };
}
