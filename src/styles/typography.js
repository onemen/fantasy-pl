import theme from 'styles/theme';
import Typography from 'typography';
import '../fonts/fonts.css';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: ['Rubik', 'Arial', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Rubik', 'Arial', 'Helvetica', 'sans-serif'],
  headerColor: theme.colors.gray,
  bodyColor: theme.colors.gray,

  overrideStyles: ({ rhythm }) => ({
    body: {
      fontVariantLigatures: 'none',
    },
    h1: {
      color: theme.colors.gray,
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
    h2: {
      color: theme.colors.gray,
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
      letterSpacing: '-0.04rem',
      fontWeight: 600,
    },
    strong: {
      fontStyle: 'bold',
    },
  }),
});
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
