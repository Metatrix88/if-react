import {
  whiteThemeAccentColor,
  whiteThemeBgColor,
  whiteThemeBgColorPages,
  whiteThemeBorderLightColor,
  whiteThemeColorBlack,
  whiteThemeColorBlue,
  whiteThemeColorWhite,
  whiteThemePrimaryDarkBlue,
  whiteThemeSecondaryTextColor,
} from '../../constants/styles.constatnts';

export const whiteTheme = {
  palette: {
    text: {
      main: whiteThemeColorWhite,
      secondary: whiteThemeColorBlack,
      tertiary: whiteThemeColorBlack,
      quaternary: whiteThemeColorBlue,
      quinary: whiteThemeSecondaryTextColor,
    },
    buttons: {
      main: whiteThemeColorWhite,
      secondary: whiteThemeColorBlue,
    },
    icons: {
      bgColor: whiteThemeColorWhite,
      main: whiteThemeColorBlue,
    },
    background: {
      main: whiteThemeColorWhite,
      section: whiteThemeBgColor,
      secondary: whiteThemeBorderLightColor,
      tertiary: whiteThemeBorderLightColor,
      formMd: whiteThemeAccentColor,
      quaternary: whiteThemePrimaryDarkBlue,
      pages: whiteThemeBgColorPages,
    },
    accent: {
      hover: whiteThemeAccentColor,
      btn: whiteThemeColorBlue,
    },
    border: {
      main: whiteThemeBorderLightColor,
      secondary: whiteThemeColorBlue,
    },
  },
};
