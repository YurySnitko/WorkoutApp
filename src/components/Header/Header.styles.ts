import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderBox = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  backgroundColor: theme.colors.purple,
  maxWidth: '762px',
  right: '0',
  left: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
}));
