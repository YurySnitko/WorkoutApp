import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const ControlsBox = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
}));

export const TrainingBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 0 50px',
  gap: '20px',
}));
