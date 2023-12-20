import {
  darkThemeAccentColor, darkThemeBgColor, darkThemeBorderLightColor, darkThemeGeneralBlackColor,
  darkThemePrimaryColor, darkThemePrimaryDarkColor, darkThemeSecondaryTextColor,
  darkThemeTextColor,
} from '../../constants/styles.constatnts';

export const darkTheme = {
  palette: {
    primary: {
      primaryColor: darkThemePrimaryColor,
      primaryDarkColor: darkThemePrimaryDarkColor,
      hover: darkThemeAccentColor,
      textColor: darkThemeTextColor,
      secondaryTextColor: darkThemeSecondaryTextColor,
      generalColor: darkThemeGeneralBlackColor,
      borderLightColor: darkThemeBorderLightColor,
      inputColor: darkThemeTextColor,
      inputValue: darkThemeTextColor,
      bgColor: darkThemeBgColor,
      linkColor: darkThemeTextColor,
    },
  },
};
