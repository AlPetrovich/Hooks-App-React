import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';


//Como el context, pero proveemos el store (react-redux)
export const JournalApp = () => {
  return(
          <Provider store={ store }>
            <AppRouter />
          </Provider>
  )
};
