import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StartBtnStld = styled(Button)(({ theme }) => ({
  position: 'fixed',
  zIndex: 10,
  bottom: '20px',
  maxWidth: '600px',
  right: 0,
  left: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  boxShadow: '2px 5px 10px 2px #e9d0f5',
  backgroundColor: theme.colors.purple,
  '&:hover': {
    backgroundColor: theme.colors.purpleHoverd,
  },
}));
