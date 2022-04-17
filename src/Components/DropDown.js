import React, { useState } from 'react';

export const DropDown = ({ header, drawer }) => {

  const [open, toggleOpen] = useState(false);

  return (
    <div
      style={styles.dropDownWrapper}
      onClick={() => toggleOpen(!open)}
    >
      <span>{header}</span>
      {open &&
        <div
          style={styles.toggleContent}
        >
          {drawer}
        </div>}
    </div>
  )
};

const styles = {
  dropDownWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  toggleContent: {

  }
};