import { Location } from './types';

export const HoanKiemLake: Location = {
  lat: 21.029085739426677,
  lng: 105.85256004918303,
};

export const BenThanhMarket: Location = {
  lat: 10.772621574518942,
  lng: 106.69801135672672,
};

// Target SVG

export const targetSVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00001 18.0002L9.00001 17.0002C9.00001 15.8957 8.10458 15.0002 7.00001 15.0002H6.00001M15 18.0002V17.0002C15 15.8957 15.8954 15.0002 17 15.0002L18 15.0002M9 6.00024L9 7.00024C9 8.10481 8.10457 9.00024 7 9.00024L6 9.00024M15 6.00027L15 7.00027C15 8.10484 15.8954 9.00027 17 9.00027L18 9.00027" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const targetButton = document.createElement('button');
targetButton.innerHTML = targetSVG;
targetButton.style.display = 'flex';
targetButton.style.alignItems = 'center';
targetButton.style.justifyContent = 'center';
targetButton.style.width = '40px';
targetButton.style.height = '40px';
targetButton.style.marginRight = '10px';
targetButton.style.border = 'none';
targetButton.style.backgroundColor = '#ffffff';
targetButton.style.boxShadow =
  'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px';
