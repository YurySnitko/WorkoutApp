import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 0 50px',
  gap: '20px',
});

export const ImgBox = styled(Box)({
  '& img': {
    width: '100%',
    borderRadius: '5px',
  },
});

export const ExercisesBox = styled(Box)({
  alignSelf: 'flex-start',
});
