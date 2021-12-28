import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const PauseBtnStld = styled(Button)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: theme.colors.purple,
  minWidth: '40px',
  padding: '10px',
  '&:hover': {
    backgroundColor: theme.colors.purpleHoverd,
  },
}));
