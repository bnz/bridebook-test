// @flow

const screenXs = 480;
const screenXsMin = screenXs;
const screenSm = 768;
const screenSmMin = screenSm;
const screenMd = 992;
const screenMdMin = screenMd;
const screenLg = 1260;
const screenLgMin = screenLg;
const screenXsMax = screenSmMin - 1;
const screenSmMax = screenMdMin - 1;
const screenMdMax = screenLgMin - 1;

export const screenSizes = {
  screenXs,
  screenXsMin,
  screenSm,
  screenSmMin,
  screenMd,
  screenMdMin,
  screenLg,
  screenLgMin,
  screenXsMax,
  screenSmMax,
  screenMdMax,
};

export const colors = {
  white: '#FFFFFF',
  space: '#1A2C40',
  blueCrush: '#537DD7',
  rose: '#F27084',
  forest: '#0EA675',
  mint: '#2DBAA7',
  amber: '#DD5A59',
  yellow: '#E7BE3E',
  mineShaft: '#4A4A4A',
  silver: '#9B9B9B',
  alto: '#BFBFBF',
  dust: '#DAD8D8',
  grey: '#E2E2E2',
  soft: '#F0F0F0',
  light: '#F7F7F7',
  paleGrey: '#F7F8FA',
  facebookBlue: '#3b5998',
  youtubeRed: '#c51a18',
  twitterBlue: '#32506d',
  vimeoBlue: '#1cb1e6',
  linkedInBlue: '#187fb8',
  googleRed: '#ea4335',
  instagramBlue: '#517fa4',
  pinterestRed: '#c41618',
  blogOrange: '#f6831f',
  battleshipGrey: '#6a7683',
  black: '#000000',
};

export const fonts = {
  quicksand:
    '"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

export const paddings = {
  small: '16px',
  medium: '24px',
};

export const transition = {
  fast: '0.15s',
  medium: '0.3s',
  slow: '0.6s',
};

export const animationTime = {
  fast: 150,
  medium: 300,
  slow: 600,
};

export const getDuration = time => ({
  duration: animationTime[time],
});
