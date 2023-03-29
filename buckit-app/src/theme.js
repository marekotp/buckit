import { createTheme } from '@mui/material/styles';

console.log('Creating theme...')

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        margin: '12px 16px',
      },
    },
    MuiTableRow: {
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: '#ffffff',
        },
        '&:hover': {
          backgroundColor: '#e5e5e5',
        },
        margin: '0 8px',
      },
    },
  },
});

export default theme;
