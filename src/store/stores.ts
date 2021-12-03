import OverviewStore from "./OverviewStore";
import TrainingStore from "./TrainingStore";

const stores = {
    overViewStore: new OverviewStore(),
    trainingStore: new TrainingStore()
}

export default stores

export type StoreType = typeof stores;