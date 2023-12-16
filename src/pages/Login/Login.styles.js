import { createUseStyles } from 'react-jss';
import { buttonRadiusLg } from '../../constants/styles.constatnts';

export const loginStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 170,
    height: 60,
    marginBottom: 32,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    padding: 32,
    border: '1px solid rgba(22, 24, 35, 0.12)',
    borderRadius: 8,
    boxSizing: ' content-box',
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 500,
  },
  textField: {
    backgroundColor: 'rgba(22, 24, 35, 0.06)',
    padding: '12px 16px',
    fontSize: 18,
    border: '1px solid rgba(22, 24, 35, 0.12)',
    borderRadius: 8,
    marginBottom: 16,

    '&:last-of-type': {
      marginBottom: 40,
    },
  },
  button: {
    height: 50,
    borderRadius: buttonRadiusLg,
  },
});

export const useLoginStyles = createUseStyles(loginStyles, { name: 'Login' });
