import {
  whiteThemeAccentColor, whiteThemeBgColor, whiteThemeBorderLightColor, whiteThemeGeneralWhiteColor,
  whiteThemePrimaryColor,
  whiteThemePrimaryDarkColor,
  whiteThemeSecondaryTextColor,
  whiteThemeTextColor,
} from '../../constants/styles.constatnts';

export const whiteTheme = {
  palette: {
    primary: {
      primaryColor: whiteThemePrimaryColor,
      primaryDarkColor: whiteThemePrimaryDarkColor,
      hover: whiteThemeAccentColor,
      textColor: whiteThemeTextColor,
      secondaryTextColor: whiteThemeSecondaryTextColor,
      generalColor: whiteThemeGeneralWhiteColor,
      borderLightColor: whiteThemeBorderLightColor,
      inputColor: whiteThemeGeneralWhiteColor,
      inputValue: whiteThemeTextColor,
      bgColor: whiteThemeBgColor,
      linkColor: whiteThemeGeneralWhiteColor,
    },
  },
};
