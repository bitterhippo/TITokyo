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
import { NavBar } from '../Components/NavBar';


export const Landing = () => {

  return (
    <Router>
      <NavBar />
      <MainContent>
        <Routes>
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </MainContent>
    </Router>
  )
};

const styles = {

};