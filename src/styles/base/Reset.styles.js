export const resetStyles = {
  /* http://meyerweb.com/eric/tools/css/reset/ */
  /* v1.0 | 20080212 */
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td':
    {
      margin: 0,
      padding: 0,
      border: 0,
      outline: 0,
      fontSize: '100%',
      verticalAlign: 'baseline',
      background: 'transparent',
    },
  body: {
    lineHeight: 1,
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: "'' none",
  },
  /* remember to define focus styles! */
  ':focus': {
    outline: 0,
  },
  /* remember to highlight inserts somehow! */
  ins: {
    textDecoration: 'none',
  },
  del: {
    textDecoration: 'line-through',
  },
  /* tables still need 'cellspacing="0"' in the markup */
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },

  /* My reset */
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },
  'a, li': {
    lineHeight: 0,
  },
  input: {
    border: 0,
    margin: 0,
    padding: 0,
    outline: 'none',
    font: 'inherit',
    cursor: 'pointer',
  },
  button: {
    padding: 0,
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};
