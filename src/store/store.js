import { createStore } from 'redux';
import { rootReducer} from "./reducers/RootReduser";

const store = createStore(rootReducer);

export default store;