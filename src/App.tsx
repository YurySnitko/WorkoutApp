import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useStore } from 'index';
import { Header } from './components/Header/Header';
import { Training } from './components/Training/Training';
import { TrainingCompleted } from './components/TrainingComlpeted/TrainingCompleted';
import { WorkoutOverview } from './components/WorkoutOverview/WorkoutOverview';
import { GetReady } from 'components/GetReady/GetReady';

function App() {
  const { overViewStore } = useStore()

  useEffect(() => {
    overViewStore.getWorkoutsData()
  }, [overViewStore])

  return (
    <Container sx={{ padding: "20px 10px" }}>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutOverview />} />
        <Route path="/training" element={<Training />} />
        <Route path="/ready" element={<GetReady />} />
        <Route path="/completed" element={<TrainingCompleted />} />
      </Routes>
    </Container>
  );
}

export default App;
