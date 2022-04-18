import React from 'react';

//Subcomponents
import { APIModule } from '../APIModule/APIModule';
import { testData } from '../Defaults/TestData';
import { DropDown } from '../Components/DropDown';

export const Scheduler = () => {

  //testing block
  console.log("%c Testing Block", "color: orange")
  //console.log(APIModule.formatData(testData));

  let hereWeGo = APIModule.formatData(testData);

  return (
    <div>
      { hereWeGo }

      {/* test */}
    </div>
  )
};

const styles = {

};