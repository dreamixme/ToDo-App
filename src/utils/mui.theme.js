import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

const MUIThemeProvider = createTheme(
  {
    direction: 'rtl',
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.035)!important',
          },
        },
      },
    },
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#3e35fc',
        dark: '#281A52',
        contrastText: '#FFF',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      info: {
        main: '#3815a4',
        dark: '#32354F',
        light: '#6438E5',
      },
      secondary: {
        main: '#F6C121',
        dark: '#F6AE2D',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#FFF',
      },
      action: {
        main: '#626262',
      },
      purple: {
        main: '#221D50',
      },
      warning: {
        main: '#F6C121',
      },
      grey: {
        A100: '#f5f5f5',
      },
      error: {
        main: '#F44336',
      },

      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color'dashboard luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  },
  faIR,
);

export default MUIThemeProvider;
