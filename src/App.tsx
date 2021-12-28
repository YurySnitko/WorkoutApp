import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useStore } from 'index';
import { Header } from './components/Header/Header';
import { Training } from './components/Training/Training';
import { TrainingCompleted } from './components/TrainingComlpeted/TrainingCompleted';
import { WorkoutOverview } from './components/WorkoutOverview/WorkoutOverview';
import { GetReady } from 'components/GetReady/GetReady';
import { AppContainer } from 'App.styles';

export const App: React.FC = () => {
  const { overViewStore } = useStore();

  useEffect(() => {
    overViewStore.getWorkoutsData();
  }, [overViewStore]);

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutOverview />} />
        <Route path="/training" element={<Training />} />
        <Route path="/ready" element={<GetReady />} />
        <Route path="/completed" element={<TrainingCompleted />} />
      </Routes>
    </AppContainer>
  );
};
