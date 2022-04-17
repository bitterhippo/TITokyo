import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Screens
import { Clock } from './Clock';
import { Scheduler } from './Scheduler';

//Subcomponents
import { MainContent } from '../PPC/MainContent';


export const Landing = () => {

  return (
    <Router>
      <MainContent>
        <Routes>
          <Route path="/" element={<Scheduler />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </MainContent>
    </Router>
  )
};

const styles = {

};