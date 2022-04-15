import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Screens
import { Timer } from './Timer';
import { MealScheduler } from './MealScheduler';

export const Landing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/mealscheduler" elment={<MealScheduler />} />
      </Routes>
    </Router>
  )
};

const styles = {

};