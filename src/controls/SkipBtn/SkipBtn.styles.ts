import { SkipBtnBoxProps } from './SkipBtn.interfaces';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const SkipBtnBox = styled(Box)<SkipBtnBoxProps>(
  ({ theme, direction }) => ({
    color: theme.colors.purple,
    position: 'absolute',
    borderWidth: '2px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: theme.colors.purpleHoverd,
    },
    right: direction === 'next' ? '0' : '',
    left: direction === 'previous' ? '0' : '',
  })
);
