import React from 'react';

//Subcomponents
import { DropDown } from '../Components/DropDown';
import { testData } from '../Defaults/TestData';

export const APIModule = {
  formatData (JSON) {
    let formattedData = [];
    let encounteredIDs = [];
    let strings = JSON.text.strings
    let values = JSON.searchFilters.category.values

    function formatAPI (node) {
      //DropDown Container Condition
      if (!encounteredIDs.includes(node.id) && node.hasOwnProperty('children')) {

        let newDrawer = [];
        node.children.forEach(cv => newDrawer.push(<div key={cv.id}>{values[cv.id]}</div>))

        let dropDownTemplate = <DropDown 
        key={node.id}
        header={strings[node.id]}
        drawer={newDrawer}
        />

        formattedData.push(dropDownTemplate)
        encounteredIDs.push(node.id)  

        node.children.forEach(cv =>formatAPI(cv))
      //No DownContainer Condition
      } else {
        encounteredIDs.push(node);
      }
    } 

    formatAPI(values)

    return formattedData;
  }
};