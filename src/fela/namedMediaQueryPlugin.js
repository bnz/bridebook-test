import namedMediaQuery from 'fela-plugin-named-media-query';
import { screenSizes } from '../themes/variables';

const namedMediaQueryPlugin = namedMediaQuery({
  minWidthXs: `@media (min-width: ${screenSizes.screenXs}px)`,
  maxWidthXs: `@media (max-width: ${screenSizes.screenXs}px)`,
  minWidthXsMin: `@media (min-width: ${screenSizes.screenXsMin}px)`,
  maxWidthXsMin: `@media (max-width: ${screenSizes.screenXsMin}px)`,
  minWidthXsMax: `@media (min-width: ${screenSizes.screenXsMax}px)`,
  maxWidthXsMax: `@media (max-width: ${screenSizes.screenXsMax}px)`,
  minWidthSm: `@media (min-width: ${screenSizes.screenSm}px)`,
  maxWidthSm: `@media (max-width: ${screenSizes.screenSm}px)`,
  minWidthSmMin: `@media (min-width: ${screenSizes.screenSmMin}px)`,
  maxWidthSmMin: `@media (max-width: ${screenSizes.screenSmMin}px)`,
  minWidthSmMax: `@media (min-width: ${screenSizes.screenSmMax}px)`,
  maxWidthSmMax: `@media (max-width: ${screenSizes.screenSmMax}px)`,
  minWidthMd: `@media (min-width: ${screenSizes.screenMd}px)`,
  maxWidthMd: `@media (max-width: ${screenSizes.screenMd}px)`,
  minWidthMdMin: `@media (min-width: ${screenSizes.screenMdMin}px)`,
  maxWidthMdMin: `@media (max-width: ${screenSizes.screenMdMin}px)`,
  minWidthMdMax: `@media (min-width: ${screenSizes.screenMdMax}px)`,
  maxWidthMdMax: `@media (max-width: ${screenSizes.screenMdMax}px)`,
  minWidthLg: `@media (min-width: ${screenSizes.screenLg}px)`,
  maxWidthLg: `@media (max-width: ${screenSizes.screenLg}px)`,
  minWidthLgMin: `@media (min-width: ${screenSizes.screenLgMin}px)`,
  maxWidthLgMin: `@media (max-width: ${screenSizes.screenLgMin}px)`,
});

export default namedMediaQueryPlugin;
