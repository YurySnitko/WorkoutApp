import React from 'react';
import { ExerciseTitleProps } from './ExerciseTitle.interfaces';
import { CheckStld } from './ExerciseTitle.styles';

export const ExerciseTitleWithStatus: React.FC<ExerciseTitleProps> = ({
  title,
  isDone,
}) => {
  return (
    <>
      {title}
      {isDone && <CheckStld />}
    </>
  );
};
