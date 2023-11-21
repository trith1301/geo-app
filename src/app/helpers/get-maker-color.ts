import { PlaceTypeColors } from '../core/enums';

const getMarkerColor = (placeName: string) => {
  if (placeName.toLocaleLowerCase().includes('công viên'))
    return PlaceTypeColors.PARK;

  if (placeName.toLocaleLowerCase().includes('bệnh viện'))
    return PlaceTypeColors.HOSPITAL;

  if (
    placeName.toLocaleLowerCase().includes('chợ') ||
    placeName.toLocaleLowerCase().includes('cửa hàng') ||
    placeName.toLocaleLowerCase().includes('siêu thị') ||
    placeName.toLocaleLowerCase().includes('tiện lợi') ||
    placeName.toLocaleLowerCase().includes('tạp hoá')
  )
    return PlaceTypeColors.SHOPPING;

  return PlaceTypeColors.EDUCATION;
};

export default getMarkerColor;
