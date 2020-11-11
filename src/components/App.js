import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculator from '../logic/calculate';

export default function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}
