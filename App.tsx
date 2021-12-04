import React from 'react';
import * as R from 'react-native';
import { QuestionProvider } from './src/context/question'
import Routes from './src/routes';


export default function App(){
  return (
    <QuestionProvider>
      <R.StatusBar barStyle='dark-content' />
      <Routes />
    </QuestionProvider>
  )
}