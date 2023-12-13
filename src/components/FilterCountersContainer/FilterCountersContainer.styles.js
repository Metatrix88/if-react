import { createUseStyles } from 'react-jss';
import {
  generalWhiteColor,
  primaryColor,
} from '../../constants/styles.constatnts';

export const filterCountersContainerStyles = () => ({
  root: {
    position: 'absolute',
    zIndex: 1,
    top: 65,
    left: '67%',
    backgroundColor: generalWhiteColor,
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
    border: `1px solid ${primaryColor}`,
    cursor: 'pointer',
  },
});

export const useFilterCounters = createUseStyles(
  filterCountersContainerStyles,
  { name: 'FilterCounters' },
);
