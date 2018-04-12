// @flow
import tinycolor from 'tinycolor2';

export const darken = (colorValue: string, percent: number): string => {
  const color = tinycolor.mix(colorValue, '#000', percent).toString();
  return color;
};

export const lighten = (colorValue: string, percent: number): string => {
  const color = tinycolor.mix(colorValue, '#FFF', percent).toString();
  return color;
};

export const mix = (first: string, second: string, percent: number): string => {
  const color = tinycolor.mix(first, second, percent).toString();
  return color;
};

export const alpha = (colorValue: string, amount: number): string => {
  const percent = amount / 100;

  const color = tinycolor(colorValue)
    .setAlpha(percent)
    .toString();

  return color;
};
