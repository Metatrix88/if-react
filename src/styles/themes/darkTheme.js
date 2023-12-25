import {
  darkThemeAccentColor,
  darkThemeBgColor,
  darkThemeBorderLightColor,
  darkThemeColorDarkBlue,
  darkThemeColorGray,
  darkThemeColorWhite,
  darkThemeColorYellow,
  darkThemeSecondaryTextColor,
} from '../../constants/styles.constatnts';

export const darkTheme = {
  palette: {
    text: {
      main: darkThemeColorYellow,
      secondary: darkThemeColorWhite,
      tertiary: darkThemeColorYellow,
      quaternary: darkThemeColorYellow,
      quinary: darkThemeSecondaryTextColor,
    },
    buttons: {
      main: darkThemeColorDarkBlue,
      secondary: darkThemeColorDarkBlue,
    },
    icons: {
      bgColor: darkThemeColorDarkBlue,
      main: darkThemeColorDarkBlue,
    },
    background: {
      main: darkThemeColorGray,
      section: darkThemeBgColor,
      secondary: darkThemeBgColor,
      tertiary: darkThemeColorGray,
      formMd: darkThemeBgColor,
      quaternary: darkThemeColorDarkBlue,
      pages: darkThemeBgColor,
    },
    accent: {
      hover: darkThemeAccentColor,
      btn: darkThemeColorDarkBlue,
    },
    border: {
      main: darkThemeBorderLightColor,
      secondary: darkThemeColorDarkBlue,
    },
  },
};
