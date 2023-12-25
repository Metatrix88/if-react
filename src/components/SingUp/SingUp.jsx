import React, { useState } from 'react';
import { useTheme } from 'react-jss';

// icons
import { Close, SingUpIcon, SquareLogo } from '../../icons';

// components
import { Container } from '../Container';
import { Button } from '../UI/Button';

// styles
import { useSingUpStyles } from './SingUp.styles';

export const SingUp = () => {
  const theme = useTheme();
  const classes = useSingUpStyles({ theme });
  const [isSectionVisible, setSectionVisible] = useState(true);
  return (
    <>
      {isSectionVisible && (
        <Container>
          <div className={classes.root}>
            <div className={classes.logo}>
              <SingUpIcon />
              <SquareLogo />
            </div>
            <div className={classes.wrapLaptop}>
              <h3 className={classes.title}>
                Sign up and get 20% off your first booking
              </h3>
              <Button variant="outlined">Sign up</Button>
            </div>
            <div className={classes.wrapMobile}>
              <h3 className={classes.title}>
                Sign up in the app and get 20% off your first booking
              </h3>
              <Button variant="text" className={classes.buttonInstall}>
                Install
              </Button>
            </div>
            <Button
              onClick={() => setSectionVisible(false)}
              className={classes.buttonClose}
              variant="icon"
              aria-label="close sing-up"
            >
              <Close />
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};
