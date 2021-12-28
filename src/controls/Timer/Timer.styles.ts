import { TimerBoxProps } from './Timer.interfaces';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const TimerBox = styled(Box)<TimerBoxProps>(({ theme, type }) => ({
  position: 'relative',
  display: 'inline-flex',
  color: type === 'ready' ? theme.colors.green : theme.colors.purpleRed,
}));

export const TimerCountBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  color: 'inherit',
});
