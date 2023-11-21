import { Location } from './types';

// BenThanh Market
export const initialPlace: Location = {
  lat: 10.772621574518942,
  lng: 106.69801135672672,
};

export const scanningRadius: string = '15000';

export const placeProps = [
  'lat',
  'lng',
  'place_id',
  'name',
  'status',
  'place_types',
];

export const userMapOptions = {
  style: 'https://tiles.goong.io/assets/goong_map_web.json',
  center: [initialPlace.lng, initialPlace.lat],
  zoom: 16,
};
