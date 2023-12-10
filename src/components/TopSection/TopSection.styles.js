import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';
import BackgroundImg from '../../images/background.jpg';

export const topSectionStyles = () => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: 293,
    paddingBottom: 120,
  },
  title: {
    color: 'white',
    maxWidth: 542,
    fontSize: 50,
    textAlign: 'left',
    marginBottom: 145,
  },
  visuallyHidden: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
    margin: -1,
    border: 0,
    padding: 0,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      paddingTop: 150,
      paddingBottom: 80,
    },
    title: {
      maxWidth: 475,
      fontSize: 40,
      marginBottom: 80,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      paddingTop: 88,
    },
    title: {
      maxWidth: 328,
      fontSize: 30,
    },
  },
});

export const useTopSectionStyles = createUseStyles(topSectionStyles, {
  name: 'TopSection',
});
