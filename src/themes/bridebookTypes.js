// @flow
import type { Element } from 'react';

type Colors = {|
  white: string,
  space: string,
  blueCrush: string,
  rose: string,
  forest: string,
  mint: string,
  amber: string,
  yellow: string,
  mineShaft: string,
  silver: string,
  alto: string,
  dust: string,
  grey: string,
  soft: string,
  light: string,
  paleGrey: string,
  facebookBlue: string,
  youtubeRed: string,
  twitterBlue: string,
  vimeoBlue: string,
  linkedInBlue: string,
  googleRed: string,
  instagramBlue: string,
  pinterestRed: string,
  blogOrange: string,
|};

export type Color = $Keys<Colors>;

// TODO: Derive it from Colors. $Shape doesn't work, $ObjMap is buggy.
// $Values? optinal keys
export type ColorProps = {
  white?: boolean,
  space?: boolean,
  blueCrush?: boolean,
  rose?: boolean,
  forest?: boolean,
  mint?: boolean,
  amber?: boolean,
  yellow?: boolean,
  mineShaft?: boolean,
  silver?: boolean,
  alto?: boolean,
  dust?: boolean,
  grey?: boolean,
  soft?: boolean,
  light?: boolean,
  paleGrey?: boolean,
  facebookBlue?: boolean,
  youtubeRed?: boolean,
  twitterBlue?: boolean,
  vimeoBlue?: boolean,
  linkedInBlue?: boolean,
  googleRed?: boolean,
  instagramBlue?: boolean,
  pinterestRed?: boolean,
  blogOrange?: boolean,
};

export type Bold =
  | 'normal'
  | 'bold'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type Theme = {
  typography: {
    fontSize: number => number,
    lineHeight: number,
    rhythm: number => number,
  },
  colors: Colors,
  page: {
    backgroundColor: Color,
  },
  text: {
    bold: Bold,
    color: Color,
    fontFamily: string,
  },
  heading: {
    bold: Bold,
    fontFamily: string,
    marginBottom: number,
  },
  p: {
    marginBottom: number,
    maxWidth: number,
  },
  set: {
    marginBottom: number,
    horizontalSpaceBetween: number,
    verticalSpaceBetween: number,
  },
  button: {
    borderColor: Color,
    borderRadius: number,
    borderWidth: number,
    marginVertical: number,
    paddingVertical: number,
    disabledOpacity: number,
  },
  form: {
    marginBottom: number,
    maxWidth: number,
  },
  textInput: {
    disabledOpacity: number,
  },
  checkbox: {
    checkedIcon: Element<'svg'>,
    uncheckedIcon: Element<'svg'>,
  },
  radio: {
    checkedIcon: Element<'svg'>,
    uncheckedIcon: Element<'svg'>,
  },
};
