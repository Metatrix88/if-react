import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const singUpStyles = (theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.section,
    padding: '52px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 86,
    height: 86,
    backgroundColor: theme.palette.background.main,
    borderRadius: '50%',
  },
  title: {
    fontWeight: 500,
    marginBottom: 22,
  },
  buttonClose: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  wrapMobile: {
    display: 'none',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      padding: '48px 16px',
      gap: 16,
    },
    logo: {
      width: 70,
      height: 70,
    },
    title: {
      marginBottom: 20,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'static',
      backgroundColor: theme.palette.background.section,
      padding: '24px 0',
      gap: 16,
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.icons.main,
      maxWidth: 58,
      height: 58,
      borderRadius: 4,
      order: 2,
    },
    wrapLaptop: {
      display: 'none',
    },
    wrapMobile: {
      display: 'flex',
      alignItems: 'baseline',
      order: 2,
    },
    title: {
      fontWeight: 400,
      fontSize: 12,
      marginBottom: 0,
      marginRight: 16,
    },
    buttonClose: {
      position: 'static',
      order: 1,
    },
    buttonInstall: {
      fontSize: 14,
    },
  },
  wrapLaptop: {},
  buttonInstall: {},
});

// .sing-up__title {
//   font-weight: 500;
//   margin-bottom: 22px;
// }
//
// .sing-up__part-title {
//   display: none;
// }
//
// .sing-up__button {
//   background: var(--general-white-color);
//   border: 1px solid var(--primary-color);
//   max-width: 128px;
//   font-size: 18px;
//   padding: 12px 16px;
//   line-height: 1.16;
//   color: var(--primary-color);
// }
//
// .sing-up__button-sm {
//   display: none;
// }
//
// .sing-up__button:hover {
//   border: 1px solid var(--accent-color);
//   color: var(--accent-color);
// }
//
// .sing-up__button-close {
//   position: absolute;
//   top: 24px;
//   right: 24px;
// }
//
// .sing-up__icon-close {
//   width: 24px;
//   height: 24px;
//   fill: var(--secondary-text-color);
// }
//
// .sing-up__icon-close:hover {
//   fill: var(--primary-dark-color);
// }
//
// @media (max-width: 1024px) {
//   /*For mobile tablets:*/
//
//
// .sing-up__title {
//     font-weight: 500;
//     margin-bottom: 20px;
//   }
//
// .sing-up__logo {
//     width: 70px;
//     height: 70px;
//   }
// }
//
// @media (max-width: 600px) {
//   /*For mobile phones:*/
//
//
// .sing-up__button-close {
//     position: static;
//     order: 1;
//   }
//
// .sing-up__icon-close {
//     width: 16px;
//     height: 16px;
//     fill: var(--secondary-text-color);
//   }
//
// .sing-up__logo {
//     width: 100%;
//     max-width: 58px;
//     height: 58px;
//     background-color: var(--primary-color);
//     border-radius: var(--basic-radius);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     order: 2;
//   }
//
// .sing-up__icon-lg {
//     display: none;
//   }
//
// .sing-up__icon-sm {
//     display: block;
//     width: 53px;
//     height: 11px;
//     fill: var(--general-white-color);
//   }
//
// .sing-up__wrap-sm {
//     display: flex;
//     align-items: center;
//     order: 3;
//     gap: calc(var(--unit) * 2);
//   }
//
// .sing-up__title {
//     font-weight: 400;
//     font-size: 12px;
//     margin-bottom: 0;
//   }
//
// .sing-up__part-title {
//     display: inline-block;
//   }
//
// .sing-up__button-lg-md {
//     display: none;
//   }
//
// .sing-up__button-sm {
//     display: inline-block;
//   }
//
// .sing-up__button {
//     background: var(--general-white-color);
//     border: none;
//     width: 100%;
//     max-width: 41px;
//     padding: 0;
//     font-weight: 500;
//     font-size: 14px;
//     color: var(--primary-color);
//   }
//
// .sing-up__button:hover {
//     border: 1px solid var(--accent-color);
//     color: var(--accent-color);
//   }
// }

export const useSingUpStyles = createUseStyles(singUpStyles, {
  name: 'SingUp',
});
