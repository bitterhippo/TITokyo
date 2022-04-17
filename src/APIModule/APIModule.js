import React from 'react';

export const APIModule = {
  formatData (JSON) {
    let formmattedData = [];
    let encoutneredIds = [];
    let strings = JSON.text.strings
    let values = JSON.searchFilters.category.values

    function father (node) {
      if (!encoutneredIds.includes(node.id) && node.hasOwnProperty('children')) {
        encoutneredIds.push(node.id)

        node.children.forEach(cv =>father(cv))
      } else {
        encoutneredIds.push(node);
      }
    } 

    father(values)

    return encoutneredIds.map(currentId => strings[currentId]);
  }
};