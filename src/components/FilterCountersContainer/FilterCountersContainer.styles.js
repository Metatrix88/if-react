import { createUseStyles } from 'react-jss';

export const filterCountersContainerStyles = (theme) => ({
  root: {
    position: 'absolute',
    zIndex: 1,
    top: 65,
    left: '67%',
    backgroundColor: theme.palette.background.main,
    maxWidth: 260,
    borderRadius: 8,
    padding: 22,
    boxShadow: '1px 1px 10px #3a3333',
  },
  counters: {
    marginBottom: 16,
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,

    '&:last-child': {
      marginBottom: 0,
    },
  },
  label: {
    fontSize: 16,
    width: 70,
  },
  input: {
    fontSize: 16,
    maxWidth: 30,
    textAlign: 'center',
    color: theme.palette.text.tertiary,
  },
  filterText: {
    fontSize: 12,
    marginBottom: 16,
  },
  selectsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  select: {
    width: '48%',
    fontSize: 12,
    padding: 8,
    border: `1px solid ${theme.palette.border.secondary}`,
    cursor: 'pointer',
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.tertiary,
  },
});

export const useFilterCounters = createUseStyles(
  filterCountersContainerStyles,
  { name: 'FilterCounters' },
);
