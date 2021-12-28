import OverviewStore from './OverviewStore/OverviewStore';
import TrainingStore from './TrainingStore/TrainingStore';

const stores = {
  overViewStore: new OverviewStore(),
  trainingStore: new TrainingStore(),
};

export default stores;
