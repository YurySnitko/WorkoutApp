import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import stores from './store/stores';
import { Theme } from 'Theme';
import { App } from 'App';
import { StoreType } from 'store/stores.interfaces';

const StoreContext = React.createContext<StoreType>(stores);

export const useStore = (): StoreType => React.useContext(StoreContext);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={stores}>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
