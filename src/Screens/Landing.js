import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Screens
import { Clock } from './Clock';
import { MealScheduler } from './MealScheduler';

export const Landing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/mealscheduler" elment={<MealScheduler />} />
      </Routes>
    </Router>
  )
};

const styles = {

};