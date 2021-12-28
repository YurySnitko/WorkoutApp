import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const FinishBtnStld = styled(Button)(({ theme }) => ({
  margin: '20px 0',
  backgroundColor: theme.colors.purple,
  '&:hover': {
    backgroundColor: theme.colors.purpleHoverd,
  },
}));
