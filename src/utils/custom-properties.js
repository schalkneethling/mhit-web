import Config from "virtual:indiecaster/config";

const options = Config.options;

export const customProperties = {
  colorPrimaryColor: options.colorPrimaryColor,
  colorPrimaryColorDark: options.colorPrimaryColorDark,
  colorPrimaryColorLight: options.colorPrimaryColorLight,
  colorSecondaryForegroundColor: options.colorSecondaryColorDark,
  colorSecondaryColorDark: options.colorSecondaryColorDark,
  colorSecondaryColorLight: options.colorSecondaryColorLight,
  colorSecondaryColor: options.colorSecondaryColor,
  headerBackgroundColor: options.headerBackgroundColor,
  headerForegroundColor: options.headerForegroundColor,
};
