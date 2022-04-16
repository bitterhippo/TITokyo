import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Screens
import { Clock } from './Clock';
import { MealScheduler } from './MealScheduler';

//Subcomponents
import { MainContent } from '../PPC/MainContent';
import { APIModule } from '../APIModule/APIModule';
import { testData } from '../Defaults/TestData';

export const Landing = () => {

  //testing block
  console.log("%c Testing Block", "color: orange")
  console.log(APIModule.formatData(testData));

  return (
    <Router>
      <MainContent>
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/mealscheduler" elment={<MealScheduler />} />
        </Routes>
      </MainContent>
    </Router>
  )
};

const styles = {

};