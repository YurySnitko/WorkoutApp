import { styled } from '@mui/material/styles';
import { Check } from '@mui/icons-material';

export const CheckStld = styled(Check)(({ theme }) => ({
  verticalAlign: 'sub',
  marginLeft: '15px',
  color: theme.colors.green,
}));
