// roboto 400
import robotoRegular400CyrillicExt from './roboto-normal-400/roboto-regular-cyrillic-ext.woff2';
import robotoRegular400Cyrillic from './roboto-normal-400/roboto-regular-cyrillic.woff2';
import robotoRegular400CyrillicGreekExt from './roboto-normal-400/roboto-regular-cyrillic-greek-ext.woff2';
import robotoRegular400CyrillicGreek from './roboto-normal-400/roboto-regular-cyrillic-greek.woff2';
import robotoRegular400Vietnamese from './roboto-normal-400/roboto-regular-vietnamese.woff2';
import robotoRegular400LatinExt from './roboto-normal-400/roboto-regular-latin-ext.woff2';
import robotoRegular400Latin from './roboto-normal-400/roboto-regular-latin.woff2';

// roboto 500
import robotoRegular500CyrillicExt from './roboto-normal-500/roboto-regular-cyrillic-ext.woff2';
import robotoRegular500Cyrillic from './roboto-normal-500/roboto-regular-cyrillic.woff2';
import robotoRegular500GreekExt from './roboto-normal-500/roboto-regular-greek-ext.woff2';
import robotoRegular500Greek from './roboto-normal-500/roboto-regular-greek.woff2';
import robotoRegular500Vietnamese from './roboto-normal-500/roboto-regular-vietnamese.woff2';
import robotoRegular500LatinExt from './roboto-normal-500/roboto-regular-latin-ext.woff2';
import robotoRegular500Latin from './roboto-normal-500/roboto-regular-latin.woff2';

// open sans 600
import openSans600CyrillicExt from './open-sans-600/open-sans-cyrillic-ext.woff2';
import openSans600Cyrillic from './open-sans-600/open-sans-cyrillic.woff2';
import openSans600Greek from './open-sans-600/open-sans-greek.woff2';
import openSans600GreekExt from './open-sans-600/open-sans-greek-ext.woff2';
import openSans600Hebrew from './open-sans-600/open-sans-hebrew.woff2';
import openSans600Latin from './open-sans-600/open-sans-latin.woff2';
import openSans600LatinExt from './open-sans-600/open-sans-latin-ext.woff2';
import openSans600Vietnamese from './open-sans-600/open-sans-vietnamese.woff2';

export const fontsStyles = {
  roboto400: {
    '@font-face': [
      /* cyrillic-ext */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400CyrillicExt}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      /* cyrillic */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400Cyrillic}) format("woff2")`,
        ].join(', '),
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      /* greek-ext */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400CyrillicGreekExt}) format("woff2")`,
        ].join(', '),
        unicodeRange: 'U+1F00-1FFF',
      },
      /* greek */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400CyrillicGreek}) format("woff2")`,
        ].join(', '),
        unicodeRange: 'U+0370-03FF',
      },
      /* vietnamese */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400Vietnamese}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      },
      /* latin-ext */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400LatinExt}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      /* latin */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Regular")',
          'local("Roboto-Regular")',
          `url(${robotoRegular400Latin}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    ],
  },
  roboto500: {
    '@font-face': [
      /* cyrillic-ext */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500CyrillicExt}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      /* cyrillic */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500Cyrillic}) format("woff2")`,
        ].join(', '),
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      /* greek-ext */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500GreekExt}) format("woff2")`,
        ].join(', '),
        unicodeRange: 'U+1F00-1FFF',
      },
      /* greek */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500Greek}) format("woff2")`,
        ].join(', '),
        unicodeRange: 'U+0370-03FF',
      },
      /* vietnamese */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500Vietnamese}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      },
      /* latin-ext */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500LatinExt}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      /* latin */
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: [
          'local("Roboto Medium")',
          'local("Roboto-Medium")',
          `url(${robotoRegular500Latin}) format("woff2")`,
        ].join(', '),
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    ],
  },
  openSans600: {
    '@font-face': [
      /* cyrillic-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600CyrillicExt}) format("woff2")`,
        unicodeRange:
          'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      /* cyrillic */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Cyrillic}) format("woff2")`,
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      /* greek-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600GreekExt}) format("woff2")`,
        unicodeRange: 'U+1F00-1FFF',
      },
      /* greek */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Greek}) format("woff2")`,
        unicodeRange: 'U+0370-03FF',
      },
      /* hebrew */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Hebrew}) format("woff2")`,
        unicodeRange: 'U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F',
      },
      /* vietnamese */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Vietnamese}) format("woff2")`,
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      /* latin-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600LatinExt}) format("woff2")`,
        unicodeRange:
          'U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      /* latin */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Latin}) format("woff2")`,
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    ],
  },
};
