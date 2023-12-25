import { createUseStyles } from 'react-jss';

export const spriteStyles = () => ({
  root: {
    height: 0,
    position: 'absolute',
    visibility: 'hidden',
    width: 0,
  },
});

export const useSpriteStyles = createUseStyles(spriteStyles, {
  name: 'Sprite',
});
