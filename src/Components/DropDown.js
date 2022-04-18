import React, { useState } from 'react';

export const DropDown = ({ header, drawer }) => {

  const [open, toggleOpen] = useState(false);

  return (
    <div style={styles.dropDownWrapper}>
      <div
        style={styles.dropDownHeader}
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
    cursor: 'pointer',
    maxWidth: 200,
  },
  dropDownHeader: {
    border: '1px solid black',
    borderRadius: 8
  },
  toggleContent: {
    margin: '10px 0 0 15px'
  }
};