import { Check } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const CompletedBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 0 20px',
  gap: '20px',
});

export const CheckStld = styled(Check)(({ theme }) => ({
  fontSize: '60px',
  color: theme.colors.green,
}));

export const ResultsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
