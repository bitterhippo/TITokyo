import React, { useState } from 'react';

export const DropDown = ({ header, drawer }) => {

  const [open, toggleOpen] = useState(false);

  return (
    <div style={styles.dropDownWrapper}>
      <div
        onClick={() => toggleOpen(!open)}
      >
        {header}
      </div>
      {open &&
        <div
          style={styles.toggleContent}
        >
          {
            drawer
          }
        </div>}
    </div>
  )
};

const styles = {
  dropDownWrapper: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  },
  toggleContent: {

  }
};