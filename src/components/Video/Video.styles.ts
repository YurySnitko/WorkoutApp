import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const VideoBox = styled(Box)({
  position: 'relative',
  '& video': {
    width: '100%',
  },
});

export const Filter = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  backgroundColor: 'black',
  opacity: '0.6',
  zIndex: '10',
});

export const PauseBox = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  color: '#eee',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  zIndex: '20',
});
