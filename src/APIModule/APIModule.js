import React from 'react';

//Subcomponents
import { DropDown } from '../Components/DropDown';

export const APIModule = {
  formatData(JSON) {
    let formattedData = [];
    let encounteredIDs = [];
    let EnglishStrings = JSON.text.strings
    let values = JSON.searchFilters.category.values

    function formatAPI(node, parent = false) {
      //Bifurcate the children by type to facilitate the creation of formatting and determine what elements need to be recurrsively mapped.
      let objFilter = node.children.filter(currentNode => typeof currentNode.children === 'object')
      let stringFilter = node.children.filter(currentNode => typeof currentNode.children !== 'object')

      //Template Data
      let newDrawer = [];

      objFilter.forEach(cv => newDrawer.push(
        <DropDown
          key={cv.id}
          header={EnglishStrings[cv.id]}
          drawer={<>items</>}
        />
      ))

      stringFilter.forEach(cv => newDrawer.push(
        <span key={cv}>
          {EnglishStrings[cv]}
        </span>
      ))

      let templatedData = <DropDown
        key={node.id}
        header={EnglishStrings[node.id]}
        drawer={newDrawer}
      />

      //Testing Case Block
      console.log(`%c${EnglishStrings[node.id]}`, "color: red")
      console.log(node)
      console.log(objFilter)
      console.log(stringFilter)

      formattedData.push(templatedData);
      //Recursion
      if (objFilter.length > 0) {
        objFilter.forEach(cv => formatAPI(cv))
      }
    }

    formatAPI(values)

    return formattedData;
  }
};