import { useNavigate } from 'react-router';
import { useStore } from 'index';
import { FinishBtnStld } from './FinishBtn.styles';
import React from 'react';

export const FinishBtn: React.FC = () => {
  const navigate = useNavigate();
  const { trainingStore } = useStore();

  const finishActivity = () => {
    trainingStore.finishActivity();
    navigate('/');
  };

  return (
    <FinishBtnStld onClick={finishActivity} variant="contained">
      Continue
    </FinishBtnStld>
  );
};
