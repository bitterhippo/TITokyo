import React from 'react';

//Subcomponents
import { DropDown } from '../Components/DropDown';
import { testData } from '../Defaults/TestData';

export const APIModule = {
  formatData(JSON) {
    let formattedData = [];
    let encounteredIDs = [];
    let EnglishStrings = JSON.text.strings
    let values = JSON.searchFilters.category.values

    function formatAPI(node, parent = false) {
      //DropDown Container Condition
      if (!encounteredIDs.includes(node.id) 
      // && node.hasOwnProperty('children')
      && node.children.every(cv => typeof cv !== 'string')
      ) {

        let newDrawer = [
          ...node.children.map(cv => <div style={{backgroundColor: 'red'}}
            key={cv.id}
            >
            {EnglishStrings[cv.id]}
          </div>)
        ];

        let dropDownTemplate = <DropDown
          key={node.id}
          header={EnglishStrings[node.id]}
          drawer={newDrawer}
        />

        formattedData.push(dropDownTemplate)
        encounteredIDs.push(node.id)

        node.children.forEach(cv => formatAPI(cv))
        //No DownContainer Condition
      } else {
        
        let newDrawer = [
          ...node.children.map(cv => <div style={{backgroundColor: 'red'}}
            key={cv}
            >
            {EnglishStrings[cv]}
          </div>)
        ];

        let dropDownTemplate = <DropDown
          key={node.id}
          header={EnglishStrings[node.id]}
          drawer={newDrawer}
        />

        formattedData.push(dropDownTemplate)
        encounteredIDs.push(node);
      }
    }

    formatAPI(values)

    return formattedData;
  }
};