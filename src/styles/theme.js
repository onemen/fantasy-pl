import { darken } from 'polished';

const brand = {
  primary: '#00CA6F',
  secondary: '#EEF4F2',
};

const colors = {
  primaryDark: '#575353',
  primaryDarker: '#3C2F2F',
  darkGray: '#676262',
  gray: '#DBDADA',
  lightGreen: '#4CE656',
  green: '#00CA6F',
  link_color: brand.primary,
  link_color_hover: `${darken(0.07, brand.primary)}`,
  link_color_active: `${darken(0.15, brand.primary)}`,
};

const theme = {
  colors,
  brand,
};

export default theme;
