import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useStore } from '.';
import { Header } from './components/Header/Header';
import { Ready } from './components/Training/Ready';
import { Training } from './components/Training/Training';
import { TrainingCompleted } from './components/TrainingComlpeted/TrainingCompleted';
import { WorkoutOverview } from './components/WorkoutOverview/WorkoutOverview';

function App() {
  const {overViewStore} = useStore()

  useEffect(() => {
    overViewStore.getWorkoutsData()
  }, [overViewStore])

  return (
    <Container sx={{padding: "20px 0"}}>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutOverview />} />
        <Route path="/training" element={<Training />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/completed" element={<TrainingCompleted />} />
      </Routes>
      
    </Container>  
  );
}

export default App;
