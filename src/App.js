import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import createRouter from './routes';

const App = () => {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
};

export default App;
